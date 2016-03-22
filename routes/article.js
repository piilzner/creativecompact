var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // return all articles
});

//check if we are going to use ID or title
router.get('/:title', function(req, res) {
  // return a articles
});

router.post('/', function(req, res) {
  // create article
});

router.put('/:id', function(req, res) {
  // update article of :id
});

router.delete('/:id', function(req, res) {
  // delete article of :id
});


module.exports = router;