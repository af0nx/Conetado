const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/schemas'); 

// Rota para registro de usuário
router.post('/register', async (req, res) => {
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

module.exports = router;
