//node server

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({type: 'application/json'}));

var dbNames = [];

app.get('/', function(req, res) {
	var resNames = {
		names: dbNames
	};
	res.status(200).send(JSON.stringify(resNames));
	console.log("Response " + JSON.stringify(resNames));
});

app.post('/', function (req, res) {
  console.log("Request body: " + JSON.stringify(req.body));
  var name = req.body.name;
  console.log("Name: " + name);
  names.push(name);
  console.log("Names: " + JSON.stringify(names));
  res.status(200).send();
});

app.post('/data', function (req, res) {
  console.log("Request body: " + JSON.stringify(req.body));
  var name = req.body.name;
  console.log("Name: " + name);
  names.push(name);
  console.log("Names: " + JSON.stringify(names));
  res.status(200).send();
});

if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log('App listening on port %s', port);
  });
  // [END server]
}

module.exports = app;