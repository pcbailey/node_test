var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var orm         = require('sequelize-connect');
 
orm.discover = [__dirname + '/models'];

orm.connect(
  'node_test',
  'root',
  '',
  {
    dialect: "mysql",
    port:    3306
  })
  .then(function(){
    console.log('Connection created.');
  });

var sequelize = orm.sequelize;
var Sequelize = orm.Sequelize;
var models    = orm.models;
var User      = models.User;

//app.use('/test', './routes/users.js');

var router = express.Router();

// configure the port
var port = process.env.PORT || 8080;

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening now.');
  next(); // move to the next routes and don't stop here
});

// ROUTE for '/'
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to my test api!' });
});

router.post('/users', function(req, res) {

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


/**
app.get('*', function(req, res) {
    console.log('Index page served!');
    res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
**/


// START THE SERVER
// ============================================================================
app.listen(port);
console.log('Magic happens on port' + port);