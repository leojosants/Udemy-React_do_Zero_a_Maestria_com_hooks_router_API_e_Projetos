// 
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Criação do schema
const userSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        profileImage: String,
        bio: String,
    },

    {
       timestamps: true  // configuração do model para informação com data e horário de criação e alteração
    }
);

// Definindo o model e schema
const User = mongoose.model('User', userSchema);

// Exportação para utilização no controller para ações no BD
module.exports = User;