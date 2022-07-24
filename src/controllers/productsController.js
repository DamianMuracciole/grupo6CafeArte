const fs = require("fs");
const path = require ("path");
//hago el requerimiento de la base de datos
const db = require('../database/models/index');
const Products = db.Product

const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


// Me traigo el json que tiene la data de prods y lo parseo
// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// const enOferta= products.filter( producto => producto.sesion == "Oferta" )
// const destacados= products.filter( producto => producto.sesion == "Destacado" )
// const normal= products.filter( producto => producto.sesion == "normal" )

// Agrega los puntos a los numeros que sean 1000
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    //Se muestran todos los productos
    index: (req,res)=> {
        let logged = req.session.userLogged;
        let msj;
        //Filtro productos habilitados para la venta
        Products.findAll({
            where:{status : 'A'}
        })
        .then(productos => {
            //Mensaje si no hay productos
            if (productos.length == 0) {
                msj = 'No hemos encontrado su producto'
            }
            return res.render("products/productos", {products:productos, msj ,logged})   
        })
        .catch(error => res.send(error))
    },

    //Método para la búsqueda de productos
    buscarProducto: (req,res) => {
        const valor = '%'+req.body.search+'%'
        let logged = req.session.userLogged;
        let msj;
        //Filtra con valor en nombre, peso o categoría. Debe estar entre los productos habilitados
        Products.findAll({where:{
            [Op.and]:[
                {[Op.or]: [
                    { name:     {[Op.like]: valor }},
                    { weight:   {[Op.like]: valor }},
                    { category: {[Op.like]: valor }}
                ]},
                {status : 'A'}
            ]
        }})
        .then(productos => {
                //mensaje de que no encuentra el producto
                if (productos.length == 0) {
                    msj = 'No hemos encontrado su producto !!'
                }
            return res.render("products/productos", {products:productos, msj ,logged})   
        })
        .catch(error => res.send(error))
    },

    //Se muestra el producto selenccionado
    productDetail: (req, res) => {
        let idProduct = req.params.id;
        let logged = req.session.userLogged;
        //se buscan los productos habilitados para la venta
        Products.findAll({
            where:{status : 'A'}
        })
        .then(productos=>{
            //Seleccion del producto
            let productoSel = productos.find(producto => producto.id == idProduct);
            //seleccion de productos relacionados por peso y tipo
            let otrosProductos = productos.filter(producto => (producto.weight == productoSel.weight  && producto.category == productoSel.category && producto.id != productoSel.id));
            res.render('products/productDetailNew', {detalleProducto: productoSel, otrosProductos, logged:logged})
        })        
        .catch(error => res.send(error))
    },

    //Carrito de compras
    productCart: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/productCart');
    },

    //Cómo comprar - aún no implementado -
    howToBuy: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/howToBuy');
    },

    //Llamado a la vista de crear producto
    crearProducto: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/crearProducto');
    },

    //Método de crecion del producto
    create: function (req, res) {
        let imagen;

		if(req.files[0] != undefined){
			imagen = req.files[0].filename
		}else{
			imagen = 'default-image.png'
		}
        //Inserta en la DB el producto nuevo
        Products.create ({
            ...req.body,
            image: imagen,
            quantity:0,
            status: 'A'
        })
        .then (product =>{
            //console.log("🚀 ~ file: productsController.js ~ line 93 ~ product", product)
            res.redirect("/productos")
        })
        .catch(error => res.send(error))
    },

    //Llamado a la vista de la edición del producto
    editarProducto:  (req,res)=> {   
        let productId = req.params.id

        Products.findByPk(productId)
        .then(Product =>{
            res.render("products/editarProducto" , {productoAEditar:Product})
        })
        .catch(error => res.send(error))
    },

    //Actualización de los valores del producto modificado
    update: (req, res) => {
        let idProduct = req.params.id;
        let productToEdit = req.body.image
        let imagen
        //Condición para la eleccion de la imagen
        if(req.files[0] != undefined){
            imagen = req.files[0].filename;
        } else {
            imagen = productToEdit
        };
        //console.log(req.body);
        
        //Carga en la DB
        Products.update({
            ...req.body,
            image: imagen
        },
        {
            where:{id : idProduct}
        })
        .then(() => res.redirect("/productos"))
        .catch(error => res.send(error))
    },

    //Borrado de un producto
	destroy : (req, res) => {
		//obtengo el id
		const idProduct = req.params.id;
		// Deshabilito el prodcto para la venta 
        // Se debe cambiar a:
        // ena : enable , habilitado
        // dis : disable, desabilitado
        Products.update({status: 'D'},{
            where:{id : idProduct}
        })
        .then(()=>{
		    res.redirect('/productos')  //redirecciono a productos
        })
        .catch(error => res.send(error))
        
	},
};

module.exports = productsController;