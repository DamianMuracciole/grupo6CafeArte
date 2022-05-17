const productosOferta = [
{
    id: 1,
    nombre: "Oferta Cafe Colombiano",
    peso: "500 grs",
    precio: "399",
    detalle: "Se trata de una variante de grano 100% arábica. Se caracteriza por ser más aromático, equilibrado y con una acidez muy agradable. En comparación con el robusta, tiene menos cafeína, entre un 0,7- 1,5%. El nivel de cafeína del robusta oscila entre 2 y 4% o más. Es, sin duda, un café muy elegante con un perfecto equilibrio entre sabor y cuerpo. En el caso del café descafeinado de este tipo de grano, el porcentaje se reduce al mínimo, lo que hace que puedas disfrutar del café hasta por la noche.",
    imagen: "cafeColombia.jpg"
},
{
    id: 2,
    nombre: "Oferta Pack Organico",
    peso: "500 grs",
    precio: "1299",
    detalle: "Pack compuesto por 250 grs de Cafe Colombia, 250 grs de Cafe Brasil y 250 grs de Cafe Etiopia",
    imagen: "PackOrganico.jpg"
},
{
    id: 3,
    nombre: "Oferta Pack Trio",
    peso: "500 grs",
    precio: "400",
    detalle: "Pack compuesto por 500 grs de Cafe Colombia, 500 grs de Cafe Brasil y 500 grs de Cafe Etiopia",
    imagen: "OfertaPackTrio.jpg"
}
]

const mainController = {
    index:(req, res) => {
        //res.render('../src/views/main/index.ejs');
        //res.render('index');
        res.render('main/index', {ofertaProductos: productosOferta});
        //res.render('/main/index.ejs');
    },
    contactenos: (req, res) => {
        res.render('main/contactenos')
    }
    
}


module.exports = mainController;