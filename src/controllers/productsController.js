

const productsController = {
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
    productoByID: (req, res) => {
        //res.send("Estoy aca?")
        let idProducto = req.params.id;
        let productoAMostrar = productos.find(function(producto){
            return producto.id == idProducto;
        })
        //res.send("Estoy en product id")
        res.render('products/productDetailNew.ejs', {detalleProducto: productoAMostrar});
    }
};


module.exports = productsController;