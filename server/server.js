const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./routes/team.routes')(app);

app.listen(8000, () => {
	console.log("Server listening on port 8000")
})