var express = require('express');
var router = express.Router();
var rankingsController = require('../controllers/rankings');

/* GET rankings page. */
router.get('/', rankingsController.rankings);

module.exports = router;
