const fs = require("fs");
const path = require ("path");
//hago el requerimiento de la base de datos
const db = require('../database/models/index');
const Products = db.Product

const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


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
        let logged = req.session.userLogged;
        let msj;

        Products.findAll()
        .then(productos => {
                if (productos.length == 0) {
                    msj = 'No hemos encontrado su producto'
                }
            return res.render("products/productos", {products:productos, msj ,logged})   
        })
        .catch(error => res.send(error))
    },
    //// esto es lo mismo que /detalle/:id/
    // productoByID: (req, res) => {
    //     //res.send("Estoy aca?")
    //     let idProducto = req.params.id;
    //     let productoAMostrar = products.find(function(producto){
    //         return producto.id == idProducto;
    //     })
    //     //res.send("Estoy en product id")
    //     res.render('products/productDetailNew.ejs', {detalleProducto: productoAMostrar});
    // },
    productDetail: (req, res) => {
        let idProduct = req.params.id;
        let logged = req.session.userLogged;

        // Products.findByPk(idProduct)
        // .then(product =>{
        //     res.render('products/productDetailNew', {detalleProducto: product, logged:logged})
        // })

        Products.findAll()
        .then(productos=>{
            let productoSel = productos.find(producto => producto.id == idProduct);
            let otrosProductos = productos.filter(producto => (producto.weight == productoSel.weight  && producto.category == productoSel.category && producto.id != productoSel.id));
            res.render('products/productDetailNew', {detalleProducto: productoSel, otrosProductos, logged:logged})
        })        
        .catch(error => res.send(error))


		//let producto = products.find(producto => producto.id == idProduct)
		//res.render('products/productDetailNew', {detalleProducto: producto, logged:logged})
    },

    productCart: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/productCart');
    },
    howToBuy: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/howToBuy');
    },
   
    crearProducto: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/crearProducto');
    },
    create: function (req, res) {
        db.Product.create ({
              ...req.body,

              quantity:0,
              status: 'A'

        })
        res.redirect("/productos")
    },


    // create:(req,res)=> {
    //     let imagen
	// 	if(req.files[0] != undefined){
	// 		imagen = req.files[0].filename

	// 	}else{
	// 		imagen = 'default-image.png'
	// 	}
		
	// 	let newProduct={
	// 	id: products[products.length -1].id + 1,
	// 		...req.body,
	// 		imagen : imagen
	// 	}

	// 	products.push(newProduct)
	// 	fs.writeFileSync(productsFilePath, JSON.stringify(products));
	// 	res.redirect('/productos')


    // },
    editarProducto: (req, res) => {
        let idProduct = req.params.id;
        let producto = products.find(producto => producto.id == idProduct)
        res.render('products/editarProducto', { productoAEditar: producto });
    },
    update: (req, res) => {
        let idProduct = req.params.id;
        //console.log("🚀 ~ file: productsController.js ~ line 65 ~ idProduct", idProduct)
        
        let productToEdit = products.find(producto => producto.id == idProduct)
        //console.log("🚀 ~ file: productsController.js ~ line 66 ~ productToEdit", productToEdit)

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
		res.redirect('/productos/detalle/' + productToEdit.id) //esta no es la vista, es la url

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
		res.redirect('/productos')	
	},

    buscarProducto: (req,res)=>{
        const valor = '%'+req.body.search+'%'
        let logged = req.session.userLogged;
        let msj;

        Products.findAll({
            where:{
                [Op.or]: [
                    { name:     {[Op.like]: valor }},
                    { weight:   {[Op.like]: valor }},
                    { category: {[Op.like]: valor }}
                ]
            }
        })
        .then(productos => {
                if (productos.length == 0) {
                    msj = 'No hemos encontrado su producto !!'
                }
            return res.render("products/productos", {products:productos, msj ,logged})   
        })
        .catch(error => res.send(error))
    }
    
};


module.exports = productsController;