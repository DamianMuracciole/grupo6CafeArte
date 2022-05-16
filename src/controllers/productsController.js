const productos = [{
        id: 1,
        nombre: "Cafe Etiopia",
        peso: "250 grs",
        precio: "500",
        detalle: "El café etíope crece a grandes altitudes, lo que produce un grano denso y duro. Los granos más densos tienden a contener una mayor cantidad de azúcares y precursores de sabor, lo cual resulta en más sabores luego del tueste. Para elegir un perfil de tueste efectivo, la clave es conocer la densidad del grano."
    },
    {
        id: 2,
        nombre: "Cafe Etiopia",
        peso: "500 grs",
        precio: "999",
        detalle: "El café etíope crece a grandes altitudes, lo que produce un grano denso y duro. Los granos más densos tienden a contener una mayor cantidad de azúcares y precursores de sabor, lo cual resulta en más sabores luego del tueste. Para elegir un perfil de tueste efectivo, la clave es conocer la densidad del grano."
    },    
    {
        id: 3,
        nombre: "Cafe Brasil",
        peso: "250 grs",
        precio: "489",
        detalle: "El café de Brasil corresponde a la variedad arábica, por ello predomina el sabor dulzón, similar a los cafés procedentes de África, aunque sin la acidez característica de estos. El café de Brasil se caracteriza por su aroma suave y fino y cuerpo alto."
    },
    {
        id: 4,
        nombre: "Cafe Brasil",
        peso: "500 grs",
        precio: "889",
        detalle: "El café de Brasil corresponde a la variedad arábica, por ello predomina el sabor dulzón, similar a los cafés procedentes de África, aunque sin la acidez característica de estos. El café de Brasil se caracteriza por su aroma suave y fino y cuerpo alto."
    },
    {
        id: 5,
        nombre: "Cafe Colombia",
        peso: "250 grs",
        precio: "500",
        detalle: "Se trata de una variante de grano 100% arábica. Una de las principales características de este café, es que se siembra a grandes alturas, principalmente en zonas montañosas. "
    },
    {
        id: 6,
        nombre: "Cafe Colombia",
        peso: "500 grs",
        precio: "980",
        detalle: "Se trata de una variante de grano 100% arábica. Una de las principales características de este café, es que se siembra a grandes alturas, principalmente en zonas montañosas. "
    },
    {
        id: 7,
        nombre: "Cafe Mexico",
        peso: "250 grs",
        precio: "466",
        detalle: "Café de especialidad mexicano, de cuerpo equilibrado y de acidez cítrica media. Cultivado a lo largo de la frontera sur, donde las montañas y las selvas le dan a las plantas los nutrientes y la altitud necesaria para un excelente café."
    },
    {
        id: 8,
        nombre: "Cafe Mexico",
        peso: "500 grs",
        precio: "950",
        detalle: "Café de especialidad mexicano, de cuerpo equilibrado y de acidez cítrica media. Cultivado a lo largo de la frontera sur, donde las montañas y las selvas le dan a las plantas los nutrientes y la altitud necesaria para un excelente café."
    },
    {
        id: 9,
        nombre: "Cafe El Salvador",
        peso: "250 grs",
        precio: "488",
        detalle: "Café 100% El Salvador es un rico café de cuerpo completo con un sabor suave y sofisticado y un aroma intenso."
    },
    {
        id: 10,
        nombre: "Cafe El Salvador",
        peso: "500 grs",
        precio: "899",
        detalle: "Café 100% El Salvador es un rico café de cuerpo completo con un sabor suave y sofisticado y un aroma intenso."
    },
    {
        id: 11,
        nombre: "Cafe Honduras",
        peso: "250 grs",
        precio: "399",
        detalle: "Se trata de una variante de grano 100% arábica. Se caracteriza por ser más aromático, equilibrado y con una acidez muy agradable. En comparación con el robusta, tiene menos cafeína, entre un 0,7- 1,5%. El nivel de cafeína del robusta oscila entre 2 y 4% o más. Es, sin duda, un café muy elegante con un perfecto equilibrio entre sabor y cuerpo. En el caso del café descafeinado de este tipo de grano, el porcentaje se reduce al mínimo, lo que hace que puedas disfrutar del café hasta por la noche."
    },
    {
        id: 12,
        nombre: "Cafe Honduras",
        peso: "250 grs",
        precio: "399",
        detalle: "Se trata de una variante de grano 100% arábica. Se caracteriza por ser más aromático, equilibrado y con una acidez muy agradable. En comparación con el robusta, tiene menos cafeína, entre un 0,7- 1,5%. El nivel de cafeína del robusta oscila entre 2 y 4% o más. Es, sin duda, un café muy elegante con un perfecto equilibrio entre sabor y cuerpo. En el caso del café descafeinado de este tipo de grano, el porcentaje se reduce al mínimo, lo que hace que puedas disfrutar del café hasta por la noche."
    },
    {
        id: 13,
        nombre: "Pack Trio",
        peso: "250 grs",
        precio: "1299",
        detalle: "Pack compuesto por 250 grs de Cafe Colombia, 250 grs de Cafe Brasil y 250 grs de Cafe Etiopia"
    },
    {
        id: 14,
        nombre: "Pack Trio",
        peso: "500 grs",
        precio: "2699",
        detalle: "Pack compuesto por 500 grs de Cafe Colombia, 500 grs de Cafe Brasil y 500 grs de Cafe Etiopia"
    },
]

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