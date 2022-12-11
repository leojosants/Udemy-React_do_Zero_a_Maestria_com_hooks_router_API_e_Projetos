// 
const multer = require('multer'); // biblioteca de upload de arquivos

const path = require('path');// modulo padrão do node que trabalha com métodos e propriedades sobre diretorios

// Destination to store image
const imageStorage = multer.diskStorage(
    {
        // alterando o destino padrao para não ocorrer substituição ao envio
        destination: (req, file, cb) => {

            let folder = '';

            if (req.baseUrl.includes('users')) {
                folder = 'users';
            }
            else if (req.baseUrl.includes('photos')) {
                folder = 'photos';
            }

            cb(null, `uploads/${folder}/`);

        },

        // alterando o nome do arquivo padrão para não ocorrer substituição ao envio
        filename: (req, file, cb) => {

            cb(null, Date.now() + path.extname(file.originalname)); // tratar nome do arquivo

        }

    }
);

// mini validação da imagem e definir local de salvamento
const imageUpload = multer(
    {
        storage: imageStorage,

        // verificando extensão do arquivo
        fileFilter(req, file, cb) {

            if (!file.originalname.match(/\.(png|jpg)$/)) {

                // upload only png and jpg formats
                return cb(new Error('Por favor, envie apenas png ou jpg!'));

            }

            cb(undefined, true);

        }
    }
);

module.exports = {
    imageUpload
};