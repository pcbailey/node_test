var orm         = require('sequelize-connect');
var sequelize   = orm.sequelize;
var Sequelize   = orm.Sequelize;
var models      = orm.models;
var User        = models.User;
var router      = require('express').Router();

// ROUTES for '/users'
router.post('/', function(req, res) {

  console.log('Create users.');

  /**console.log('sequelize: ' + typeof sequelize);
  console.log('Sequelize: ' + typeof Sequelize);
  console.log('models: ' + typeof models);
  console.log('Spell ' + typeof Spell);
  
 for (var name in models) {
  if (models.hasOwnProperty(name)) {
    console.log(name);
  }
}
**/

  User.create({
    user_name: 'user',
    first_name: 'first',
    last_name: 'last',
    email_address: 'user@user.com'
  })
  .then(function(user) {
      console.log("User created!");
      res.json(user);
  })
  .catch(function(error) {
    console.log("ops: " + error);
    res.status(500).json({ error: 'error' });
  });

});

module.exports = router;