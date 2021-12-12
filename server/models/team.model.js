const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
	name: { 
		type: String, 
		required: [true, "A player's name is required."],
		minlength: [ 2, "A player's name must be longer than 2 characters."]
	},
	position: {
		type: String
	}
}, {timestamps: true, versionKey: false});
// above we add createdat and modifiedat fields to the mongo record and remove the versionKey (__v)

module.exports = mongoose.model('Player',  PlayerSchema)