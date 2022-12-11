
// Invocando express
const express = require('express');

// Estabelecendo conexão
const app = express();

// Lendo as requisições em JSON
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

// Rotas - endpoints
app.post('/createproduct', (req, res) => {

    const name = req.body.name;
    const price = req.body.price;

    console.log(name);
    console.log(price);

    res.json({message: `O produto ${name} foi criado com sucesso!`});

});

app.get('/', (req, res) => {

    res.json({ message: 'Primeira rota criada com sucesso!' });

});

// Escutando uma porta
app.listen(3000);