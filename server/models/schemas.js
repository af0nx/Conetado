const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    googleId: String, // Adicione o ID do Google como um campo opcional
    displayName: String, 
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    sessionToken: String // Adicione um campo para armazenar o token de sessão
});

module.exports = mongoose.model('User', userSchema);
