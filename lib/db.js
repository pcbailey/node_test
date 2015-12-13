var Sequelize   = require('sequelize');

var sequelize   = new Sequelize('node_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});



var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;