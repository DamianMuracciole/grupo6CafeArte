
const fs = require("fs");
const path = require ("path")

const productsPath= path.join(__dirname, "../data/products.json");

const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
const enOferta= products.filter( producto => producto.sesion == "Oferta" )
const destacados= products.filter( producto => producto.sesion == "Destacado" )
const normal= products.filter( producto => producto.sesion == "normal" )


const mainController = {
    index:(req, res) => {
        //res.render('../src/views/main/index.ejs');
        //res.render('index');
        res.render('main/index', {products, enOferta, destacados, normal});
        //res.render('/main/index.ejs');
    },
    contactenos: (req, res) => {
        res.render('main/contactenos')
    }
    
}


module.exports = mainController;