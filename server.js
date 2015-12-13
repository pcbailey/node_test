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

var models    = orm.models;
var User      = models.User;

var router = express.Router();
var routes = require('./routes/users.js');
app.use('/test', routes);

// configure the port
var port = process.env.PORT || 8080;

// middleware to use for all requests
router.use(function(req, res, next) {

  // log event
  console.log('Something is happening now.');
  next(); // move to the next routes and don't stop here
});

// ROUTE for '/'
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to my test api!' });
});

// ROUTE for '/users'
router.post('/users', function(req, res) {

  console.log('Creating a user.');

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

// START THE SERVER
// ============================================================================
app.listen(port);
console.log('Magic happens on port' + port);