const productsController = {
    productCart: (req, res) => {
        //res.send("Estoy aca?")
        res.render('../src/views/products/productCart.ejs');
    },
    comoComprar: (req, res) => {
        //res.send("Estoy aca?")
        res.render('../src/views/products/comoComprar.ejs');
    },
    productDetail: (req, res) => {
        //res.send("Estoy aca?")
        res.render('../src/views/products/productDetail.ejs');
    }
};


module.exports = productsController;