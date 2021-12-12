const Player = require('../models/team.model');

// index to check server is live
module.exports.index = ( request, response ) => {
	response.json({
		message: "API is live"
	})
}
// get all players
module.exports.findAllPlayers = ( request, response ) => {
	console.log("Getting all the players...");
	Player.find({})
		.then((players) => response.json(players))
		.catch((err) => {
			response.status(400).json(err)
			console.log("Failed retrieving all players")
		})
}

// get a single player
module.exports.findOnePlayer = ( request, response ) => {
	console.log("Getting a single player...");
	Player.findOne({_id : request.params.id})
		.then((player) => response.json(player))
		.catch((err) => {
			response.status(400).json(err)
			console.log("Failed retrieving the player")
		})
}

// create player
module.exports.createPlayer = ( request, response ) => {
	console.log("Creating a single player...");
	// all validation is coming from the backend server model
	Player.create(request.body)
		.then((player) => response.json(player))
		.catch((err) => {
			response.status(400).json(err)
			console.log("Failed creating a player")
		})
}

// update player
module.exports.updatePlayer = ( request, response ) => {
	// all validation is coming from the backend server 
	Player.findByIdAndUpdate({_id : request.params.id}, request.body, {new:true, runValidators:true})
		.then(updatedPlayer => response.json(updatedPlayer))
		.catch((err) => {
			response.status(400).json(err)
			console.log("Failed updating a player")
		})
}

// deleting an player
module.exports.findOneAndDelete = ( request, response ) => {
	Player.findByIdAndDelete({_id : request.params.id })
		.then(deleteConfirmation => response.json(deleteConfirmation))
		.catch((err) => {
			response.status(400).json(err)
			console.log("Failed deleting a player")
		})
}
