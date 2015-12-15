var models  = require('../models');
var express = require('express');
var router  = express.Router();

// GET
router.get('/', function(req, res) {
    models.Chore.findAll({
    }).then(function(chores) {
        res.json(chores);
    });
});

// POST
router.post('/', function (req, res) {

    console.log('Create chores.');

    models.Chore.create({
        chore: 'chore',
        due_date: 'now',
    })
    .then(function (chores) {
        console.log("Chore created!");
        res.json(chores);
    })
    .catch(function (error) {
        console.log("ops: " + error);
        res.status(500).json({error: 'error'});
    });
});

module.exports = router;