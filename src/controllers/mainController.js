//NOTA (2022-07-25) de Damian Muracciole
//Este archivo se trató de limpiar comentarios de código ya no utilizable 
//por cuestiones de legibilidad
//para verlo completo referirise a la rama feature-feature-RemenberMe


//hago el requerimiento de la base de datos
const db = require('../database/models/index');
const Products = db.Product

const mainController = {
    //Muestra productos destacados de la pagina de inicio
    index:(req, res) => {
        Products.findAll()
        .then(products =>{
            const enOferta = products.filter( producto => producto.session == "Oferta" )
            const destacados = products.filter( producto => producto.session == "Destacado" )

            res.render('main/index', {enOferta, destacados});
        })
    },
    //Va a la vista de contactenos
    contactenos: (req, res) => {
        res.render('main/contactenos')
    }

}

module.exports = mainController;