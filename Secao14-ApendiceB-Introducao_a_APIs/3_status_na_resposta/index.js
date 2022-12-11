
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

    if (!name) {
        res.status(422).json({ message: `O campo nome é obrigatório!` });
        return;
    }

    console.log(name);
    console.log(price);

    res.status(201).json({message: `O produto ${name} foi criado com sucesso!`});

});

app.get('/', (req, res) => {

    res.status(200).json({ message: 'Primeira rota criada com sucesso!' });

});

// Escutando uma porta
app.listen(3000);