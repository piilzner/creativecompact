var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstname: { type: String, required: false, unique: false},
    lastname: { type: String, required: false, unique: false},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, unique: false},
    img: { type: String, required: false, unique: false},
    desc: { type: String, required: false, unique: false},
});


module.exports = mongoose.model('users', userSchema);