const userController = {    
    register: (req, res) => {
        //res.send("Estoy aca")
        res.render('../src/views/users/register.ejs')
    },
    login: (req, res) => {
        res.render('../src/views/users/login.ejs')
    }
};

module.exports = userController;