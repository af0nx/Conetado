const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    googleId: String, // Adicione o ID do Google como um campo opcional
    googleAccessToken: String, // Adicione o token de acesso do Google como um campo opcional
    googleRefreshToken: String, // Adicione o token de atualização do Google como um campo opcional
    googleProfile: Object, // Adicione um campo para armazenar o perfil completo do Google como um objeto
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

module.exports = mongoose.model('User', userSchema);