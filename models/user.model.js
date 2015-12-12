"use strict";

module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    user_name: Sequelize.STRING,
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email_address: Sequelize.STRING
  }, {
    timestamps: false
  });

  return User;

});