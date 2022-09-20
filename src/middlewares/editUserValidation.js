const { body } = require('express-validator');
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

    body('newPassword').notEmpty().withMessage("Debe que escribir una nueva contraseña").bail()
    .isLength({ min: 8 }).withMessage("La contraseña tiene que tener un mínimo de 8 caracteres")
    .custom((value, { req }) => {
        if (value !== req.body.newRepassword) {
        throw new Error('Las contraseñas no son iguales');
        }    
        return true;
    }),

    body('newRepassword').notEmpty().withMessage("Por favor, confirme su constraseña").bail()
    .isLength({ min: 8 }).withMessage("La contraseña tiene que tener un mínimo de 8 caracteres")
    .custom((value, { req }) => {
        if (value !== req.body.newPassword) {
        throw new Error('Las contraseñas no son iguales');
        }    
        return true;
    }),


    // body('changePassword').custom((value, { req }) => {
    //     if (value){
    //         body('newPassword').notEmpty().withMessage("Debe que escribir una nueva contraseña").bail()
    //         .isLength({ min: 8 }).withMessage("La contraseña tiene que tener un mínimo de 8 caracteres")
    //         .custom((value, { req }) => {
    //             if (value !== req.body.newRepassword) {
    //             throw new Error('Las contraseñas no son iguales');
    //             }    
    //             return true;
    //         })
    //     }}
    // ),
    
    // body('changePassword').custom((value, { req }) => {
    //     if (value){
    //         body('newRepassword').notEmpty().withMessage("Por favor, confirme su constraseña").bail()
    //         .isLength({ min: 8 }).withMessage("La contraseña tiene que tener un mínimo de 8 caracteres")
    //         .custom((value, { req }) => {
    //             if (value !== req.body.newPassword) {
    //             throw new Error('Las contraseñas no son iguales');
    //             }    
    //             return true;
    //         })
    //     }}
    // ), 
    

    body('image').custom((value, { req }) => {
        //let file = req.file;
        let file = req.body.image;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if(!file){
            throw new Error('Debe subir una imagen')
        } else { 
            let fileExtension = path.extname(file).toLocaleLowerCase();
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones para archivos deben ser ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;
    })
]
module.exports = validations;