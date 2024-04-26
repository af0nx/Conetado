const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const authRoutes = require('./routes/router'); // Importe as rotas de autenticação
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');


const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
    secret: '597878689235768651783476587931768934587943267846371678a', // Substitua por uma chave secreta adequada
    resave: false,
    saveUninitialized: false
  }));




require('./passport');
connectDB();
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Roteamento
app.use('/auth', authRoutes); // Use as rotas de autenticação no prefixo /auth

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
