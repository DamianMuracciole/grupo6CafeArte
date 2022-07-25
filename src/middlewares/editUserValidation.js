const { body } = require('express-validator');
const path = require('path')

const validations = [
    
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if(!file){
            res.locals.userLogged
            throw new Error('Tienes que subier una imagen')
        } else { //cuando me envien un archivo (sino me sale un error porque al principio no viene nada, entonces ahi si pregunto lo de las extensiones)
            let fileExtension = path.extname(file.originalname).toLocaleLowerCase();
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones para archivos deben ser ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;
    })
]

module.exports = validations;