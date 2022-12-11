// ESSE MIDDLEWARE SERVIRÁ PARA TODA AS VALIDAÇÕES

const { validationResult } = require('express-validator');

const validate = (req, res, next) => {

    const errors = validationResult(req); // capturando erros que vem da requisição

    if (errors.isEmpty()) {
        return next();
    }

    const extractedErros = []; // armazenará os erros extraídos

    errors.array().map((err) => extractedErros.push(err.msg)); // extraindo erros que serão enviados ao front-end

    return res.status(422).json(
        {
            errors: extractedErros,
        }
    );

};

// exportação para utilização nas rotas
module.exports = validate;