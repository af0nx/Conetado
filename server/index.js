const cors = require('cors'); 
const express = require('express');
const authRoutes = require('./routes/auth');
const connectDB = require('./db.js');
const UserModel = require('./models/schemas.js');
const app = express();
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello, world!'); // Ou qualquer outra resposta desejada
});

app.post("/registro", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});


// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});