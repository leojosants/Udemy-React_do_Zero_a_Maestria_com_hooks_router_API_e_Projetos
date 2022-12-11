// 
const Photo = require('../models/Photo');

const User = require('../models/User');

const mongoose = require('mongoose');

// insert photo, with an user related to it
const insertPhoto = async (req, res) => {

    const { title } = req.body;

    const image = req.file.filename;

    const reqUser = req.user;

    const user = await User.findById(reqUser._id);

    // create a photo
    const newPhoto = await Photo.create(
        {
            image,
            title,
            userId: user._id,
            userName: user.name
        }
    );

    // if photo was created successfuly, return data
    if (!newPhoto) {

        res.status(422).json(
            {
                errors: ['Houve um problema, por favor tente novamente mais tarde!']
            }
        );

        return;

    }

    res.status(201).json(newPhoto);

};

// remove a photo from DB
const deletePhoto = async (req, res) => {

    const { id } = req.params;

    const reqUser = req.user;

    try {

        const photo = await Photo.findById(mongoose.Types.ObjectId(id));

        // check if photo exists
        if (!photo) {

            res.status(404).json(
                {
                    errors: ['Foto não encontrada!']
                }
            );

            return;

        }

        // check if photo belongs to user
        if (!photo.userId.equals(reqUser._id)) {

            res.status(422).json(
                {
                    errors: ['Ocorreu um erro, por favor tente novamente mais tarde!']
                }
            );

        }

        await Photo.findByIdAndDelete(photo._id);

        res.status(200).json(
            {
                id: photo._id,
                message: 'Foto excluída com sucesso!'
            }
        );

    } catch (error) {

        res.status(404).json(
            {
                errors: ['Foto não encontrada!']
            }
        );

    }

};

// get all photos
const getAllPhotos = async (req, res) => {

    const photos = await Photo.find({}).sort([['createdAt', -1]]).exec(); // buscando todas as fotos e ordenando pelas criados por ultimo, ou seja, as mais novas

    res.status(200).json(photos);

};

// get user photos
const getUserPhotos = async (req, res) => {

    const { id } = req.params; // pegando id da URL

    const photos = await Photo.find(
        {
            userId: id
        }
    ).sort([['createdAt', -1]]).exec();

    return res.status(200).json(photos);

};

// get photo by id
const getPhotoById = async (req, res) => {

    const { id } = req.params;

    const photo = await Photo.findById(mongoose.Types.ObjectId(id));

    // check if photo exits
    if (!photo) {
        res.status(404).json(
            {
                errors: ['Foto não encontrada!']
            }
        );

        return;
    }

    res.status(200).json(photo);

};

// update a photo
const updatePhoto = async (req, res) => {

    const { id } = req.params;

    const { title } = req.body;

    // adionado codigo
    // let image;
    // if (req.file) {image = req.file.filename;}

    const reqUser = req.user;

    const photo = await Photo.findById(id);

    // check if photo exists
    if (!photo) {
        res.status(404).json(
            {
                errors: ['Foto não encontrada!']
            }
        );

        return;
    }

    // check if photo belongs to user
    if (!photo.userId.equals(reqUser._id)) {

        res.status(422).json(
            {
                errors: ['Ocorreu um erro, por favor tente novamente mais tarde!']
            }
        );

        return;

    }

    if (title) {
        photo.title = title;
    }

    // adicionado codigo
    // if(image){photo.image=image}

    await photo.save();

    res.status(200).json(
        {
            photo,
            message: 'Foto atualizada com sucesso!'
        }
    );

};

// Like functionality
const likePhoto = async (req, res) => {

    const { id } = req.params;

    const reqUser = req.user;

    const photo = await Photo.findById(id);

    // check if pgoto exists
    if (!photo) {

        res.status(404).json(
            {
                errors: ['Foto não encontrada!']
            }
        );

        return;

    }

    // check if user already liked the photo
    if (photo.likes.includes(reqUser._id)) {

        res.status(422).json(
            {
                errors: ['Você já curtiu a foto!']
            }
        );

        return;

    }

    // put user id in likes array
    photo.likes.push(reqUser._id);

    photo.save();

    res.status(200).json(
        {
            photoId: id,
            userId: reqUser._id,
            message: 'A foto foi curtida!'
        }
    );

};

// comment functionality
const commentPhoto = async (req, res) => {

    const { id } = req.params;

    const { comment } = req.body;

    const reqUser = req.user;

    const user = await User.findById(reqUser._id);

    const photo = await Photo.findById(id);

    // check if photo exists
    if (!photo) {

        res.status(404).json(
            {
                errors: ['Foto não encontrada!']
            }
        );

        return;

    }

    // put comment in the array comments
    const userComment = {

        comment,
        userName: user.name,
        userImage: user.profileImage,
        userId: user._id

    };

    photo.comments.push(userComment);

    await photo.save();

    res.status(200).json(
        {
            comment: userComment,
            message: 'O comentário foi adicionado com sucesso!'
        }
    );

};

// search photos by title
const searchPhotos = async (req, res) => {
  
    const { q } = req.query;
    
    const photos = await Photo.find(
        {
            title: new RegExp(q, 'i')
        }
    ).exec();
    
    res.status(200).json(photos);

};

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto,
    commentPhoto,
    searchPhotos
};