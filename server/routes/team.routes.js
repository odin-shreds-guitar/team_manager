const TeamController = require('../controllers/team.controller')

module.exports = function(app){
	app.get('/api', TeamController.index);
	app.get('/api/team-manager', TeamController.findAllPlayers);
    app.get('/api/team-manager/:id', TeamController.findOnePlayer);
    app.post('/api/team-manager/new', TeamController.createPlayer);
    app.put('/api/team-manager/:id', TeamController.updatePlayer);
    app.delete('/api/team-manager/:id', TeamController.findOneAndDelete)
}