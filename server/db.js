
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const password = 'Eder2024?!'; // Sua senha com caracteres especiais
        const encodedPassword = encodeURIComponent(password); // Codificando a senha para URL
        const uri = `mongodb+srv://afonsosousamartins:${encodedPassword}@cluster0.ks1cc02.mongodb.net/?retryWrites=true&w=majority`;

        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
