var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
 
    console.log(req.body);
    //crete a user
});


module.exports = router;