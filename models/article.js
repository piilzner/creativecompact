var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: { type: String, required: true, unique: false},
	desc: { type: String, required: true, unique: false},
	date: { type: String, required: false, unique: false},
    author: { type: String, required: false, unique: false},
    img: { type: String, required: false, unique: false},
    tags: { type: String, required: false, unique: false}
});


module.exports = mongoose.model('articles', articleSchema);