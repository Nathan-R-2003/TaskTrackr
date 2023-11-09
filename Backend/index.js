const express = require('express');
const app = express();
var http = require('http'); 
var https = require('https');

http.createServer(app).listen(80); 
https.createServer({}, app).listen(443);

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(4000, () => {
	console.log('Listening on port 4000');
});