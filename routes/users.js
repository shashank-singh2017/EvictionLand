var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* Get Login Page */
router.get('/login', usersController.login);

/* Get the Signup Page */
router.get('/signup', usersController.signup);

module.exports = router;
