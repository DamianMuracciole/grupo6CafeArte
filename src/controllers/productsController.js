const fs = require("fs");
const path = require ("path")


// Me traigo el json que tiene la data de prods y lo parseo
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const enOferta= products.filter( producto => producto.sesion == "Oferta" )
const destacados= products.filter( producto => producto.sesion == "Destacado" )
const normal= products.filter( producto => producto.sesion == "normal" )

// Podemos hacer una const para agarrar el parms.id
//const idProduct = req.params.id;

// Agrega los puntos a los numeros que sean 1000
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
    howToBuy: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/howToBuy');
    },
    productDetail: (req, res) => {
        let idProduct = req.params.id;
		let producto = products.find(producto => producto.id == idProduct)
		res.render('products/productDetailNew', {detalleProducto: producto})
        //res.render('products/productDetail');
    },
    crearProducto: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/crearProducto');
    },
    create:(req,res)=> {
        let imagen
		if(req.files[0] != undefined){
			imagen = req.files[0].filename

		}else{
			imagen = 'default-image.png'
		}
		
		let newProduct={
		id: products[products.length -1].id + 1,
			...req.body,
			imagen : imagen
	
	}
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect('/products')


    },
    editarProducto: (req, res) => {
        let idProduct = req.params.id;
        let producto = products.find(producto => producto.id == idProduct)
        res.render('products/editarProducto', { productoAEditar: producto });
    },
    update: (req, res) => {
        let idProduct = req.params.id;
        console.log("🚀 ~ file: productsController.js ~ line 65 ~ idProduct", idProduct)
        
        let productToEdit = products.find(producto => producto.id == idProduct)
        console.log("🚀 ~ file: productsController.js ~ line 66 ~ productToEdit", productToEdit)

        let image
        if(req.files[0] != undefined){
            image = req.files[0].filename;
        } else {
            image = productToEdit.imagen
        };

        productToEdit = {
			id: productToEdit.id,
			...req.body,
			imagen: image
		}

		let newProduct = products.map(product => {			
			if(product.id == productToEdit.id){
				return product = {...productToEdit};
			}
			return product
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProduct))
		res.redirect('/products/' + productToEdit.id) //esta no es la vista, es la url

    },
    // productDetailNew: (req, res) => {
    //     //res.send("Estoy aca?")
    //     res.render('products/productDetailNew');
    // },

    // Delete - Delete one product from DB
	destroy : (req, res) => {
		//obtengo el id
		const idProduct = req.params.id;
		//filtro el nuevo array sin el producto
		let newList = products.filter(product => product.id != idProduct);

		//cargo los nuevos datos: se pasa a formato JSON y carga el nuevo valor
		fs.writeFileSync(productsFilePath, JSON.stringify(newList));
		//redirecciono a productos
		res.redirect('/products')	
	}
    
};


module.exports = productsController;