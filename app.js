const express = require('express');
var request = require('request');

const app = express();

app.listen(9000, function(req, res){
	console.log('running');
});

app.get('/', function (req, res){
	request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', function (error, response, body) {
		if (!error && response.statusCode == 200) {
		res.send(body) // Print the google web page.
	}
})
})

app.get('/tyler', function (req, res){
	const id = req.query.id;

	res.send('welcome back tyler: ' + id);
})

app.get('/tyler/:id', function (req, res){
	const id = req.params.id;
	res.send('welcome back tyler number: ' + id);
})
