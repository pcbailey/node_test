module.exports = (function() {

    var orm = require('sequelize-connect');
    var sequelize = orm.sequelize;
    var Sequelize = orm.Sequelize;
    var models = orm.models;
    var User = models.User;
    var router = require('express').Router();

    // ROUTES for '/users'
    router.post('/', function (req, res) {

        console.log('Create users.');

        User.create({
            user_name: 'user',
            first_name: 'first',
            last_name: 'last',
            email_address: 'user@user.com'
        })
        .then(function (user) {
            console.log("User created!");
            res.json(user);
        })
        .catch(function (error) {
            console.log("ops: " + error);
            res.status(500).json({error: 'error'});
        });

    });

    return router;

})();