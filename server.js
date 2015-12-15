var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var router      = express.Router();
var users       = require('./routes/users');
var port        = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use('/test/users', users);

// middleware to use for all requests
router.use(function(req, res, next) {

  // log event
  console.log('Something is happening now.');
  next(); // move to the next routes and don't stop here

});

// ROUTE for '/'
router.get('/test', function(req, res) {
  res.json({ message: 'hooray! welcome to my test api!' });
});

// START THE SERVER
// ============================================================================
app.listen(port);
console.log('Magic happens on port' + port);