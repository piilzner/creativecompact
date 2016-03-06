var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/creativecompact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Creative Compact, Webdevelopment' });
});

router.post('/message', function(req, res) {
  var messageModel = require("./../models/message");
  if(validator.isEmail(req.body.email)){
    if(req.body.name && validator.isLength(req.body.name, 1)){
      var message = new messageModel({ 
        email: validator.trim(validator.escape(req.body.email)),
        name: validator.trim(validator.escape(req.body.name)),
        message: validator.trim(validator.escape(req.body.message)), 
        });
      message.save(function (err, doc) {
        if (err){
          res.sendStatus(500);
        }else{
          console.log(doc);
          res.sendStatus(200);
        }
      });
    }else{
      res.send({error:"novalid", message: "Skriv in ett namn"});
    }   
  }else{
    res.send({error:"novalid", message: "Skriv in en giltig Emailadress"});
  }
  
});

module.exports = router;
