const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const authRoutes = require('./routes/router'); // Importe as rotas de autenticação

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Roteamento
app.use('/auth', authRoutes); // Use as rotas de autenticação no prefixo /auth

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
