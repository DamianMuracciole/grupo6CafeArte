const db = require('../../database/models');
const sequelize = db.sequelize;



//Aqui tienen otra forma de llamar a cada uno de los modelos
const Products = db.Product;
// const Genres = db.Genre;
// const Actors = db.Actor;


const apiProductsController = {

    index: (req,res) => {
        Products.findAll()
        .then(products => {
            let count = products.length;
            let molido = products.filter(product => product.category == 'molido')
            let countCategoryMolido = molido.length;
            let granos = products.filter(product => product.category == 'granos')
            let countCategoryGrano = granos.length;
            let capsulas = products.filter(product => product.category == 'Capsulas')
            let countCategoryCapsulas = capsulas.length;

            console.log(countCategoryMolido);
            console.log(countCategoryGrano);
            console.log(countCategoryCapsulas);
            res.json(products)}
        )
    },
    
    detail: (req, res) => {
        Products.findOne({
            where:{id : req.params.id},
            attributes: ['name', 'detail','image','price','weight','category','quantity']
        })
        .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/products/:id'
                    },
                    data: {
                        name: product.name,
                        weigth: product.weight,
                        detail: product.detail,
                        price: product.price,
                        category: product.category,
                        quantity: product.quantity,
                        image: 'http://localhost:3000/images/' + product.image
                    }
                }
                res.json(respuesta);
            });
    }
    
}

module.exports = apiProductsController;