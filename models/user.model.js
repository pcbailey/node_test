"use strict";

module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    user_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email_address: DataTypes.STRING
  }, {
    timestamps: false
  });

  return User;
};