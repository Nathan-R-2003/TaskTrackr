const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());

// connect to database
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://na707413:NatR2003%40@cluster0.6odal67.mongodb.net/user_stuff?retryWrites=true&w=majority");



app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(4000, () => {
	console.log('Listening on port 4000');
});