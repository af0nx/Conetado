const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/schemas'); 
const crypto = require('crypto'); // Para gerar tokens
const transporter = require('../emailConfig'); //email
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Rota para registro de usuário
router.post('/registro', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verifique se o e-mail já está em uso
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Este e-mail já está em uso.' });
        }

        // Criptografe a senha antes de armazená-la no banco de dados
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crie um novo usuário
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Salve o novo usuário no banco de dados
        await newUser.save();

        res.status(201).json({ message: 'Usuário registrado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Ocorreu um erro ao registrar o usuário.', error: error.message });
    }
});

// Rota para login de usuário
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verifique se o usuário existe no banco de dados
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Verifique se a senha está correta
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        // Se as credenciais estiverem corretas, retorne o usuário
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Ocorreu um erro ao fazer login.', error: error.message });
    }
});

// Rota para esqueceu a senha
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Verifique se o email existe no banco de dados
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Gere um token único
        const token = crypto.randomBytes(20).toString('hex');

        // Salve o token no banco de dados junto com a data de expiração
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hora
        await user.save();

        // Envie um email para o usuário contendo um link para a página de redefinição de senha
        const mailOptions = {
            from: 'dbwtrabalho@gmail.com', // Seu endereço de email do Gmail
            to: email,
            subject: 'Redefinição de Senha',
            text: `Você está recebendo este email porque solicitou a redefinição de senha para sua conta.\n\n` +
                `Por favor, clique no seguinte link ou cole-o em seu navegador para completar o processo:\n\n` +
                `http://localhost:3001/reset-password/${token}\n\n` +
                `Se você não solicitou isso, por favor, ignore este email e sua senha permanecerá inalterada.\n`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error:', error);
                return res.status(500).json({ message: 'Failed to send email' });
            }
            console.log('Email sent:', info.response);
            res.json({ message: 'Email sent for password reset' });
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        // Encontre o usuário com base no token
        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
        if (!token) {
            return res.status(400).json({ message: 'Token inválidooooooooooooooooooooooooooooo' });
        }
        if (!user) {
            return res.status(400).json({ message: 'Token inválido ou expirado' });
        }

        // Criptografe a nova senha
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Atualize a senha do usuário
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        // Salve as alterações no banco de dados
        await user.save();

        // Responda com uma mensagem de sucesso
        res.status(200).json({ message: 'Senha redefinida com sucesso' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Ocorreu um erro ao redefinir a senha' });
    }
});


module.exports = router;
