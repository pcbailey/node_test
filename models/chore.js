"use strict";

module.exports = function (sequelize, DataTypes) {

    var Chore = sequelize.define('User', {
        chore: DataTypes.STRING,
        due_date: DataTypes.STRING,
    }, {
        timestamps: false
    });

    return Chore;
};