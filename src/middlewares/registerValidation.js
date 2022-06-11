const { body } = require('express-validator');
const path = require('path')

const validations = [
    body('nombre').notEmpty().withMessage("Tienes que escribir un nombre"),
    body('apellido').notEmpty().withMessage("Tienes que escribir un apellido"),
    body('usuario').notEmpty().withMessage("Tienes que escribir un usuario"),
    body('correo')
        .notEmpty().withMessage("Tienes que poner un email").bail() //si tengo un error para notEmpty paro ahi
        .isEmail().withMessage('Tienes que poner un formato de correo electronico valido.'),
    body('fechaNacimiento').notEmpty().withMessage("Tienes que poner tu fecha de nacimiento"),
    body('contrasena').notEmpty().withMessage("Tienes que escribir una constrseña").bail()
    .isLength({ min: 5 }).withMessage("La contraseña tiene que tener un minimo de 5 caracteres"),
    body('dobleContrasena').notEmpty().withMessage("Por favor confirma tu constraseña").bail()
    .custom((value, { req }) => {
        if (value !== req.body.contrasena) {
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