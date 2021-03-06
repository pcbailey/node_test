var models  = require('../models');
var express = require('express');
var router  = express.Router();

// GET
router.get('/', function(req, res) {
    models.User.findAll({
    }).then(function(users) {
        res.json(users);
        });
});

// POST
router.post('/', function (req, res) {

    console.log('Create users.');

    models.User.create({
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

module.exports = router;