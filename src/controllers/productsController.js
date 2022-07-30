//NOTA (2022-07-25) de Damian Muracciole
//Este archivo se trató de limpiar comentarios de código ya no utilizable 
//por cuestiones de legibilidad
//para verlo completo referirise a la rama crudCris2

//hago el requerimiento de la base de datos
const db = require('../database/models/index');
const Products = db.Product
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const { validationResult } = require('express-validator');

// Agrega los puntos a los numeros que sean 1000
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    //Listado de todos los productos habilitados
    index: (req,res) => {
        let logged = req.session.userLogged;
        let msj;

        Products.findAll({
            where:{status : 'A'}
        })
        .then(productos => {
                if (productos.length == 0) {
                    msj = 'No hemos encontrado su producto'
                }
            return res.render("products/productos", {products:productos, msj ,logged})   
        })
        .catch(error => res.send(error))
    },
    //Buscador de un pruducto
    buscarProducto: (req,res) => {
        const valor = '%'+req.body.search+'%'
        let logged = req.session.userLogged;
        let msj;

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
                if (productos.length == 0) {
                    msj = 'No hemos encontrado su producto !!'
                }
            return res.render("products/productos", {products:productos, msj ,logged})   
        })
        .catch(error => res.send(error))
    },
    //detalle del producto
    productDetail: (req, res) => {
        let idProduct = req.params.id;
        let logged = req.session.userLogged;

        Products.findAll({
            where:{status : 'A'}
        })
        .then(productos=>{
            let productoSel = productos.find(producto => producto.id == idProduct);
            let otrosProductos = productos.filter(producto => (producto.weight == productoSel.weight  && producto.category == productoSel.category && producto.id != productoSel.id));
            res.render('products/productDetailNew', {detalleProducto: productoSel, otrosProductos, logged:logged})
        })        
        .catch(error => res.send(error))
    },
    //Va al carro de compras
    productCart: (req, res) => {
        res.render('products/productCart');
    },
    //Muestra como comprar - No implementado -
    howToBuy: (req, res) => {
        res.render('products/howToBuy');
    },
    //vista de CRear pruducto
    crearProducto: (req, res) => {
        //res.send("Estoy aca?")
        res.render('products/crearProducto');
    },
    //CArga del producto nuevo en la DB
    create: (req, res) => {
        const resultValidation = validationResult(req)        

        if (resultValidation.errors.length > 0) {
            res.render('products/crearProducto', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            let imagen;
            //condiciones para la carga de la imagen
            if(req.file.filename){
                imagen = req.file.filename;
            }else{
                imagen = 'default-image.png';
            }
            //crea el producto en la DB
            Products.create ({
                  ...req.body,
                  image: imagen,
                  status: 'A'
            })
            .then (product =>{
                res.redirect("/productos")
            })
            .catch(error => res.send(error))
        }
        
    },
    //Vista de la edicion de un pruducto
    editarProducto: (req,res) => {   
        let productId = req.params.id;

        Products.findByPk(productId)
        .then(Product =>{        
            res.render("products/editarProducto" , {productoAEditar:Product})
        })
        .catch(error => res.send(error))
    },
    //actualización del producto en la DB
    update: (req, res) => {
        let idProduct = req.params.id;
        let productToEdit = req.body.image;
        let imagen;

        if(req.files[0] != undefined){
            imagen = req.files[0].filename;
        } else {
            imagen = productToEdit;
        };

        console.log(req.body);
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
    //Borrado o deshabilitacion del producto en la DB
	destroy : (req, res) => {
		//obtengo el id
		const idProduct = req.params.id;
		//filtro
        Products.update({status: 'D'},{
            where:{id : idProduct}
        })
        .then(()=>{
           //redirecciono a productos
		res.redirect('/productos') 
        })
        .catch(error => res.send(error))
	}    
};

module.exports = productsController;