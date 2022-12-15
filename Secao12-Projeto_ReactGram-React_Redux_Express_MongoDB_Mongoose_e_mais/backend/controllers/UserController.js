
// 
const User = require('../models/User');

// 
const bcrypt = require('bcryptjs');

// 
const jwt = require('jsonwebtoken');

// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

// 
const jwtSecret = process.env.JWT_SECRET;

// gerar token
const generateToken = (id) => {

    return jwt.sign(
        {
            id
        },

        jwtSecret,

        {
            expiresIn: '7d', // logout automático
        }
    );

};

// register user and sign in
const register = async (req, res) => {

    const { name, email, password } = req.body;

    // check if user exists
    const user = await User.findOne(
        {
            email
        }
    );

    if (user) {

        res.status(422).json(
            {
                errors: ['Por favor utilize outro e-mail!']
            }
        );

        return;

    }

    // Generate password hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create(
        {
            name,
            email,
            password: passwordHash
        }
    );

    // If user was created successfuly, return token
    if (!newUser) {

        res.status(422).json(
            {
                errors: ['Houve um erro, por favor tente mais tarde!']
            }
        );

        return;
    }

    res.status(201).json(
        {
            _id: newUser._id,
            token: generateToken(newUser._id),
        }
    );

};

// Sign user in
const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // check if user exists
    if (!user) {

        res.status(404).json(
            {
                errors: ['usuário não encontrado!']
            }
        );

        return;

    }

    // check if password matches
    if (!(await bcrypt.compare(password, user.password))) {

        res.status(422).json(
            {
                errors: ['Senha inválida!']
            }
        );

        return;

    }

    // Return user with token
    res.status(200).json(
        {
            _id: user._id,
            profileImage: user.profileImage,
            token: generateToken(user._id)
        }
    );

};

// Get current lconst getCurrentUser
const getCurrentUser = async (req, res) => {

    const user = req.user;

    res.status(200).json(user);

};

// update an user
const update = async (req, res) => {

    const { name, password, bio } = req.body;

    let profileImage = null;

    if (req.file) {
        profileImage = req.file.filename;
    }

    const reqUser = req.user;

    // recebe o id do mongodb e a descaracteriza
    const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select('-password');

    if (name) {
        user.name = name;
    }

    if (password) {

        // generate password hash
        const salt = await bcrypt.getSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        user.password = passwordHash;

    }

    if (profileImage) {
        user.profileImage = profileImage;
    }

    if (bio) {
        user.bio = bio;
    }

    // salvando objeto no BD
    await user.save();

    res.status(200).json(user);

};

// Get user by id
const getUserById = async (req, res) => {

    const { id } = req.params;

    try {

        const user = await User.findById(mongoose.Types.ObjectId(id)).select('-password');

        // check if user exists
        if (!user) {

            res.status(404).json(
                {
                    errors: ['Usuário não encontrado!']
                }
            );

            return;

        }

        res.status(200).json(user);

    } catch (error) {

        res.status(404).json(
            {
                errors: ['Usuário não encontrado!']
            }
        );

        return;

    }

};


// exportação para uso no arquivo centralizador de rotas
module.exports = {
    register,
    login,
    getCurrentUser,
    update,
    getUserById
};