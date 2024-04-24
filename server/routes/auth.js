const express = require('express');
const router = express.Router();
const User = require('../models/schemas'); // Defina o modelo de usuário

// **WARNING: Storing passwords in plain text is a major security risk!**
// This code is provided for demonstration purposes only and should not be used in production.

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check for existing user with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // **SECURITY RISK: Password is stored in plain text!**
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error); // Log the actual error for debugging
    res.status(500).json({ error: 'Something went wrong' });
  }
});


module.exports = router;