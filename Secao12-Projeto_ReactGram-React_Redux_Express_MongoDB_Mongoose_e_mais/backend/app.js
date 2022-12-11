 
require('dotenv').config(); // dá acesso ao arquivo .env

const express = require('express'); // chamada ao back-end

const path = require('path'); // determinar caminho de diretorio das imagens

const cors = require('cors'); // acessar projetona aplicação de front-end

const port = process.env.PORT;

const app = express();  // invocando o framework

// config JSON and form data response
app.use(express.json());
app.use(express.urlencoded(
    {
        extended: false,
    }
)); // para aceitar form e data

// solve CORS
app.use(cors(
    {
        credentials: true, origin: 'http://localhost:3000',
    }
));

// upload directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// DB connection
require('./config/db.js');

// routes
const router = require('./routes/Router');

app.use(router);

// inicializando a aplicação
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});