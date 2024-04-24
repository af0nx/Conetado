const express = require('express'); // Correção: removi o espaço entre require e ('express')
const connectDB = require('./db.js');

connectDB();

const app = express(); // Correção: adicionei os parênteses para invocar a função express()

app.listen(3000, () => {
    console.log('app is running');
});
