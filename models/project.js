var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	title: { type: String, required: true, unique: false},
	desc: { type: String, required: true, unique: false},
	date: { type: String, required: false, unique: false},
    img: { type: String, required: false, unique: false},
    website: { type: String, required: false, unique: false},
    tags: { type: String, required: false, unique: false}
});


module.exports = mongoose.model('projects', projectSchema);