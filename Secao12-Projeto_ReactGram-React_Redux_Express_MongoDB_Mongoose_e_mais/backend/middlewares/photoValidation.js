// 
const { body } = require('express-validator');

const photoIsertValidation = () => {

    return [

        body('title')
            .not()
            .equals('undefined')
            .withMessage('O título é obrigatório!')
            .isString()
            .withMessage('O título é obrigatório!')
            .isLength({ min: 3 })
            .withMessage('O título precisa ter no mínimo 3 caracteres!'),

        body('image')
            .custom((value, { req }) => {

                if (!req.file) {
                    throw new Error('A imagem é obrigatória!')
                }

                return true;

            }),

    ];

};

// tratar title
const photoUpdateValidation = () => {

    return [

        body('title')
            .optional()
            .isString()
            .withMessage('O título é  obrigatório!')
            .isLength({ min: 3 })
            .withMessage('O título preceisa ter no mínimo 3 caracteres.')

    ];

};

const commentValidation = () => {

    return [

        body('comment')
            .isString()
            .withMessage('O comentário é obrigatório!')

    ];

};

module.exports = {
    photoIsertValidation,
    photoUpdateValidation,
    commentValidation
};