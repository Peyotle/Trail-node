var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var trailController = require('./controllers/trail');
var userController = require('./controllers/user');
var siteController = require('./controllers/site');
var passport = require('passport');
var authController = require('./controllers/auth');

mongoose.connect('mongodb://localhost:27017/cycletrails');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var router = express.Router();

// Router requests
router.route('/trails')
  .post(authController.isAuthenticated, trailController.postTrail)
  .get(authController.isAuthenticated, trailController.getTrails);

router.route('/trails/:trail_id')
  .get(authController.isAuthenticated, trailController.getTrail)
  .put(authController.isAuthenticated, trailController.putTrail)
  .delete(authController.isAuthenticated, trailController.deleteTrail);

router.route('/users')
  .post(userController.postUser)
  .get(authController.isAuthenticated, userController.getUsers);

router.route('/sites')
  .post(authController.isAuthenticated, siteController.postSite)
  .get(authController.isAuthenticated, siteController.getSites)

app.use('/api', router);

app.listen(3000);
console.log('Server started');
