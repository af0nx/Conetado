const nodemailer = require('nodemailer');

// Configuração do transporte SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dbwtrabalho@gmail.com', // Seu endereço de email do Gmail
        pass: "aywa lqsb duzq ztpo"
    }
});

module.exports = transporter;
