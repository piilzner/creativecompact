var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	name: { type: String, required: true, unique: false},
	email: { type: String, required: true, unique: false},
	message: { type: String, required: false, unique: false}
});


module.exports = mongoose.model('messages', messageSchema);