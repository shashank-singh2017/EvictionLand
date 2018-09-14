var express = require('express');
var router = express.Router();

var mainController = require('../controllers/home');

/* GET home page. */
router.get('/', mainController.home);

module.exports = router;
