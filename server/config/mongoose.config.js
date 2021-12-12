const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/teammanager", {
	useNewUrlParser : true,
	useUnifiedTopology : true,
})
	.then(() => console.log("Team Manager DB connected"))
	.catch(() => console.log("There was an error connecting to the teammanager DB"))