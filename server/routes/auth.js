const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/schemas'); // Defina o modelo de usuário

// Rota de registro
router.post('/register', async (req, res) => {
  try {
    const {name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash da senha

    // Crie um novo usuário no banco de dados
    const newUser = new User({ name ,email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Rota de login
//router.post('/login', async (req, res) => {
 // try {
  //  const { email, password } = req.body;
  //  const user = await User.findOne({ email });

  //  if (!user) {
  //    return res.status(401).json({ error: 'Invalid credentials' });
   // }

   // const isPasswordValid = await bcrypt.compare(password, user.password);
  //  if (!isPasswordValid) {
   //   return res.status(401).json({ error: 'Invalid credentials' });
   // }
//
   // res.status(200).json({ message: 'Login successful' });
 // } catch (error) {
 //   res.status(500).json({ error: 'Something went wrong' });
 // }
 //});

module.exports = router;
