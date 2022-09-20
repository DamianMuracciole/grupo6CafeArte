const express = require('express')
const app = express();
const path = require("path")
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require("express-session");
const cookieParser = require('cookie-parser');
const recordameMiddleware = require('./src/middlewares/recordameMiddleware');
const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware");
const cors = require ('cors')

// middleware de aplicacion con session
app.use(session({
    secret:"007 agente secreto",
    resave: false, // para evitar q aparezca deprecated
    saveUninitialized: false, // para evitar q aparezca deprecated
}))
app.use(cors())

// La cookie tiene que estar antes de la session
app.use(cookieParser());

app.use(userLoggedMiddleware);
app.use(recordameMiddleware);



// Template Engine EJS
app.set('view engine', 'ejs')
//app.set('views', path.join(__dirname, 'views'));
// Testeando esta desde el proyecto que mandaron como ejemplo
app.set('views', path.resolve(__dirname, './src/views'));
// let dir = path.resolve(__dirname, 'src')
// console.log("El file queda en: ", dir);

// Archivos de rutas || NO HACE FALTA PONER EL .js AL FINAL PARECE...
const rutasMain = require('./src/routes/mainRoutes')
const rutasProductos = require('./src/routes/productRoutes.js')
const rutasUsers = require('./src/routes/userRoutes');
const { cookie } = require('express-validator');
// const { cookie } = require('express-validator');

//API's
const apiUsersRouter = require('./src/routes/apis/userApi');
const apiProducts = require('./src/routes/apis/productsApi')



// Configuracion Puerto
const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath) );
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
// Para los formulatios POST
app.use(express.urlencoded({ extended: false })) // para archivos estaticos de public
app.use(express.json());
app.use(methodOverride("_method"))

// Confirmacion del Servidor Corriendo
app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}!!`);
    }
);

// Archivos de rutas
// Main
app.use('/', rutasMain)

// Rutas Productos
app.use('/productos', rutasProductos)

// Rutas Usuarios
app.use('/usuarios', rutasUsers)

// Para apis
app.use('/api/users', apiUsersRouter);
app.use('/api/products',apiProducts)

// Para la 404 - La vista que se va a cargar es la de not-found
// Tiene que ir despues de definir todas las rutas.
app.use((req, res, next) => {
    res.status(404).render("main/404")
})