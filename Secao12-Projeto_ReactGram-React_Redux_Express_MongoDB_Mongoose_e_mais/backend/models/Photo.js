// 
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Criação do schema
const photoSchema = new Schema(
    {
        image: String,
        title: String,
        likes: Array,
        comments: Array,
        userId: mongoose.ObjectId,
        userName: String,
    },

    {
        timestamps: true  // configuração do model para informação com data e horário de criação e alteração
    }
);

// Definindo o model e schema
const Photo = mongoose.model('Photo', photoSchema);

// Exportação para utilização no controller para ações no BD
module.exports = Photo;