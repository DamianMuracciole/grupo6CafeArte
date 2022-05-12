const mainController = {
    index:(req, res) => {
        //res.render('../src/views/main/index.ejs');
        //res.render('index');
        res.render('/main/index.ejs');
        //res.render('/main/index.ejs');
    },
    contactenos: (req, res) => {
        res.render('../src/views/main/contactenos.ejs')
    },
    // error: (req, res) => {
    //     res.render('../src/views/main/404.ejs')
    // }
}


module.exports = mainController;