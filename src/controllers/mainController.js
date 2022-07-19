const fs = require("fs");
const path = require ("path")

//hago el requerimiento de la base de datos
const db = require('../database/models/index');
const Products = db.Product

// const productsPath= path.join(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

// const enOferta= products.filter( producto => producto.sesion == "oferta" )
// const destacados= products.filter( producto => producto.sesion == "destacado" )
// const normal= products.filter( producto => producto.sesion == "normal" )


const mainController = {
    index:(req, res) => {
        Products.findAll()
        .then(products =>{
            const enOferta = products.filter( producto => producto.session == "oferta" )
            const destacados = products.filter( producto => producto.session == "destacado" )
            const normal = products.filter( producto => producto.session == "normal" )

            res.render('main/index', {products, enOferta, destacados, normal});
        })
    },
    contactenos: (req, res) => {
        res.render('main/contactenos')
    }

}


module.exports = mainController;