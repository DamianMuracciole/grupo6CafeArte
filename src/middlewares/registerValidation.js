const { body , check } = require('express-validator');
const path = require('path')

const validations = [
    body('first_name').notEmpty().withMessage("Debe escribir un nombre").bail()
    .isLength({ min: 2 }).withMessage("El nombre debe tener un mínimo de 2 caracteres").bail()
    .custom(name => {
        if (name.charAt(0) == ' ' || name.charAt(1) == ' ' ) return false
        else return true
        }).withMessage("No se admite dos espacios al principio"),
    
    body('last_name').notEmpty().withMessage("Dede escribir un apellido").bail()
    .isLength({ min: 2 }).withMessage("El apellido debe tener un mínimo de 2 caracteres").bail()
    .custom(name => {
        if (name.charAt(0) == ' ' || name.charAt(1) == ' ' ) return false
        else return true
        }).withMessage("No se admite dos espacios en blanco al principio"),

    body('username').notEmpty().withMessage("Debe escribir un nombre de Usuari@"),
   
    body('email')
        .notEmpty().withMessage("Debe escribir un email").bail() //si tengo un error para notEmpty paro ahi
        .isEmail().withMessage('Debe ser un formato de correo electrónico válido'),
   
    body('birth_date').notEmpty().withMessage("Debe ingresar su fecha de nacimiento"),
    
    body('password').notEmpty().withMessage("Debe que escribir una contraseña").bail()
    .isLength({ min: 8 }).withMessage("La contraseña tiene que tener un mínimo de 8 caracteres"),
    
    body('confirm_password').notEmpty().withMessage("Por favor, confirme su constraseña").bail()
    .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas no son iguales');
        }    
        // Indicates the success of this synchronous custom validator
        return true;
      }),
    
    body('image').custom((value, { req }) => {
        let file = req.file;

        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if(!file){
            throw new Error('Debe subir una imagen')
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