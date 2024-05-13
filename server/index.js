const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const authRoutes = require('./routes/router'); // Importe as rotas de autenticação
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const Replicate = require('replicate');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
    secret: '597878689235768651783476587931768934587943267846371678a', // Substitua por uma chave secreta adequada
    resave: false,
    saveUninitialized: false
  }));


  app.use(express.json()); // Middleware para interpretar o corpo da requisição como JSON

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
    userAgent: 'https://www.npmjs.com/package/create-replicate'
  });
  
  app.post('/run-replicate', async (req, res) => {
    const { prompt } = req.body; // Extrair o prompt do corpo da requisição
    const model = 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b';
    const input = {
      width: 768,
      height: 768,
      prompt,
      refine: 'expert_ensemble_refiner',
      scheduler: 'K_EULER',
      lora_scale: 0.6,
      num_outputs: 1,
      guidance_scale: 7.5,
      apply_watermark: false,
      high_noise_frac: 0.8,
      negative_prompt: '',
      prompt_strength: 0.8,
      num_inference_steps: 25,
    };
  
    console.log({ model, input });
    console.log('Running...');
  
    try {
      const output = await replicate.run(model, { input });
      console.log('Done!', output);
      res.json(output);
    } catch (error) {
      console.error('Erro ao executar o replicate:', error);
      res.status(500).json({ error: 'Erro ao executar o replicate' });
    }
  });

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
