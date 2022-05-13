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
    }
};


module.exports = productsController;