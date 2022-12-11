
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
app.get('/', (req, res) => {
    
    res.json({ message: 'Primeira rota criada com sucesso!' });

});

// Escutando uma porta
app.listen(3000);