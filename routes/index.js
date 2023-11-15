var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MainMenu' });
});

/* GET home page. */
router.get('/help', function(req, res, next) {
  res.render('help', { title: 'Help' });
});


/* GET home page. */
router.get('/settings', function(req, res, next) {
  res.render('settings', { title: 'Settings' });
});

module.exports = router;
