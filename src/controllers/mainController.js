const mainController = {
    index:(req, res) => {
        //res.render('../src/views/main/index.ejs');
        //res.render('index');
        res.render('main/index');
        //res.render('/main/index.ejs');
    },
    contactenos: (req, res) => {
        res.render('main/contactenos')
    },
    // error: (req, res) => {
    //     res.render('../src/views/main/404.ejs')
    // }
}


module.exports = mainController;