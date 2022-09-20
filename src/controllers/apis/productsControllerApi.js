//const { Op } = require("sequelize");
const db = require('../../database/models');
//const path = require('path');
const Product = db.Product;

const productsControllerApi = {
    all: (req,res) => {

        let molido = Product.count({
            where:{category:"Molido"}
        })

        let granos = Product.count({
            where:{category:"En Granos"}
        })

        let capsulas = Product.count({
            where:{category:"Capsulas"}
        })

        let chocolates = Product.count({
            where:{category:"Chocolates"}
        })

        let cookies = Product.count({
            where:{category:"Cookies"}
        })

        let alfajores = Product.count({
            where:{category:"Alfajores"}
        })

        let destacado = Product.count({
            where:{session:"Destacado"}
        })

        let normal = Product.count({
            where:{session:"Normal"}
        })

        let oferta = Product.count({
            where:{session:"Oferta"}
        })

        let productosActivos = Product.count({
            where:{status:"A"}
        })

        let productosInactivos = Product.count({
            where:{status:"D"}
        })

        Promise.all([molido,granos, capsulas, chocolates, cookies, alfajores, destacado, normal, oferta, productosActivos, productosInactivos])
         .then ( categorias => {
                Product.findAll()
                    .then(productsDB => {
                        let products = [];
                        productsDB.forEach(product => {
                            let productForApi = {
                                id: product.id,
                                name: product.name,
                                weight:product.weight,
                                price: product.price,
                                quantity: product.quantity,
                                status: product.status,
                                detail: product.detail,
                                category: product.category,
                                session: product.session,
                                url: `/api/products/${product.id}`,
                                image: `http://localhost:3000/images/${product.image}`
                            };
                            products.push(productForApi);
                        });
                        // let respuesta = {
                        return res.json({
                        meta: {
                            status: 200,
                            url: 'api/products'                            
                        },
                        total: products.length,
                        productsByCategory:[{
                            name: "Molido",
                            amount: categorias[0]
                        },
                            {
                            name: "Granos",
                            amount: categorias[1]
                        },
                        {
                            name: "Capsulas",
                            amount: categorias[2]
                        },
                        {
                            name: "Chocolates",
                            amount: categorias[3]
                        },
                        {
                        name: "Cookies",
                        amount: categorias[4]
                        },
                        {
                        name: "Alfajores",
                        amount: categorias[5]
                        }],
                        productsBySession:[{destacado:categorias[6]}, {normal:categorias[7]}, {oferta:categorias[8]}],
                        productsByStatus:[{productosActivos:categorias[9]}, {productosInactivos:categorias[10]}],
                        productos: products
                    })
                    //}
                        //console.log("🚀 ~ file: productsControllerApi.js ~ line 71 ~ granos", granos)
                        //console.log("🚀 ~ file: productsControllerApi.js ~ line 71 ~ molido", molido)
                        // res.json(respuesta);
                    }).catch(error => 
                        res.send(error))

                    }
         )



        },

    productsData: (req,res) => {
        Product.findByPk(req.params.id)
        .then(product => {
            
              let producto = {
                id: product.id,
                        name: product.name,
                        weight:product.weight,
                        price: product.price,
                        quantity: product.quantity,
                        status: product.status,
                        detail: product.detail,
                        category: product.category,
                        session: product.session,
                        url: `/api/products/${product.id}`,
                        image: `http://localhost:3000/images/${product.image}`
              }                
                res.json(producto);
            }).catch(error =>
                res.send(error));

    }
    
};

module.exports = productsControllerApi;