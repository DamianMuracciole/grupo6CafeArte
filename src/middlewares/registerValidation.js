const { body } = require('express-validator');
const path = require('path')

const validations = [
    body('first_name').notEmpty().withMessage("Tienes que escribir un nombre"),
    body('last_name').notEmpty().withMessage("Tienes que escribir un apellido"),
    body('username').notEmpty().withMessage("Tienes que escribir un usuario"),
    body('email')
        .notEmpty().withMessage("Tienes que poner un email").bail() //si tengo un error para notEmpty paro ahi
        .isEmail().withMessage('Tienes que poner un formato de correo electrónico válido.'),
    body('birth_date').notEmpty().withMessage("Tienes que poner tu fecha de nacimiento"),
    body('password').notEmpty().withMessage("Tienes que escribir una contraseña").bail()
    .isLength({ min: 5 }).withMessage("La contraseña tiene que tener un mínimo de 5 caracteres"),
    body('confirm_password').notEmpty().withMessage("Por favor, confirma tu constraseña").bail()
    .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas no son iguales');
        }    
        // Indicates the success of this synchronous custom validator
        return true;
      }),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if(!file){
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