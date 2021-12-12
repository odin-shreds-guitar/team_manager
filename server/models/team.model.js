const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
	name: { 
		type: String, 
		required: [true, "A name is required here."],
		minlength: [ 2, "A name must be longer than 2 characters. Unlike Paul Simon, you cannot call him Al"]
	},
	position: {
		type: String
	}
}, {timestamps: true, versionKey: false});
// above we add createdat and modifiedat fields to the mongo record and remove the versionKey (__v)

module.exports = mongoose.model('Player',  PlayerSchema)