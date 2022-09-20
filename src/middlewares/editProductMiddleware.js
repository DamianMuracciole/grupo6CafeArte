const { body } = require('express-validator');
const path = require('path')

const editProductValidations = [
    body('name').notEmpty().withMessage("Tienes que escribir un nombre de producto").bail()
    .isLength({ min: 5 }).withMessage("El nombre debe tener un mínimo de 5 caracteres"),
    body('weight').notEmpty().withMessage("Tienes que escribir el peso del producto").bail()
    .isNumeric().withMessage("El peso debe ser un número").bail()
    .isInt({min:1, max: 9999999 }).withMessage("El peso debe ser mayor a 0"),
    body('detail').notEmpty().withMessage("Tienes que escribir un detalle del producto").bail()
    .isLength({ min: 20 }).withMessage("El detalle tiene que tener un mínimo de 20 caracteres"),
    body('price').notEmpty().withMessage("Tienes que poner el precio del producto").bail()
    .isNumeric().withMessage("El precio debe ser un número").bail(),
    body('quantity').notEmpty().withMessage("Tienes que poner una cantidad del producto").bail()
    .isNumeric().withMessage("La cantidad debe ser un número").bail()
    .isInt({min:1, max: 9999999 }).withMessage("El cantidad debe ser mayor a 0"),
    body('category').notEmpty().withMessage('Tienes que elegir una categoria'),
    body('session').notEmpty().withMessage('Tienes que elegir una sesion'),
    // body('image').custom((value, { req }) => {
    //     let file = req.file;
    //     let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        
    //     if(!file){
    //         throw new Error('Tienes que subir una imagen')
    //     } else { //cuando me envien un archivo (sino me sale un error porque al principio no viene nada, entonces ahi si pregunto lo de las extensiones)
    //         let fileExtension = path.extname(file.originalname).toLocaleLowerCase();
    //         if(!acceptedExtensions.includes(fileExtension)) {
    //             throw new Error(`Las extensiones para archivos deben ser ${acceptedExtensions.join(', ')}`)
    //         }
    //     }
    //     return true;
    // })
]

module.exports = editProductValidations;