var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('admin/loggin.jade');
});

router.get('/dashboard', function(req, res) {
  res.render('admin/loggin.jade');
});

module.exports = router;