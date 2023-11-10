const express = require('express')
const app = express();
const cors = require('cors')
const { MongoClient } = require('mongodb');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(4000, () => {
	console.log('Listening on port 4000');
});