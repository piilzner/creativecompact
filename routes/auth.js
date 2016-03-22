var express = require('express');
var router = express.Router();

router.post('/loggin', function(req, res) {
    console.log(req.body);
});

router.get('/loggout', function(req, res) {
  
});

router.post('/createuser', function(req, res) {
    console.log(req.body);
    
    
});


module.exports = router;