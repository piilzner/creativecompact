var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // return all pojects
});

//check if we are going to use ID or title
router.get('/:title', function(req, res) {
  // return a pojects
});

router.post('/', function(req, res) {
  // create pojects
});

router.put('/:id', function(req, res) {
  // update pojects of :id
});

router.delete('/:id', function(req, res) {
  // delete pojects of :id
});

module.exports = router;