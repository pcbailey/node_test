"use strict";
var models  = require('../models');

module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    user_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email_address: DataTypes.STRING
  },{
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Chore)
      }
    },
    timestamps: false
  });

  return User;
};