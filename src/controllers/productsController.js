const fs = require("fs");
const path = require ("path")

const productsPath= path.join(__dirname, "../data/products.json");

const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
const enOferta= products.filter( producto => producto.sesion == "Oferta" )
const destacados= products.filter( producto => producto.sesion == "Destacado" )
const normal= products.filter( producto => producto.sesion == "normal" )

const productsController = {
    index: (req,res)=> {
        res.render("products/productos", {products, enOferta})
    },

    productoByID: (req, res) => {
        //res.send("Estoy aca?")
        let idProducto = req.params.id;
        let productoAMostrar = products.find(function(producto){
            return producto.id == idProducto;
        })
        //res.send("Estoy en product id")
        res.render('products/productDetailNew.ejs', {detalleProducto: productoAMostrar});
    },

    productCart: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/productCart');
    },
    comoComprar: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/comoComprar');
    },
    productDetail: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/productDetail');
    },
    crearProducto: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/crearProducto');
    },
    editarProducto: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/editarProducto');
    },
    // productDetailNew: (req, res) => {
    //     //res.send("Estoy aca?")
    //     res.render('products/productDetailNew');
    // },
    
};


module.exports = productsController;