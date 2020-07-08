//node server

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({ extended: true }));

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
  dbNames.push(name);
  console.log("Names: " + JSON.stringify(dbNames));
  res.status(200).send();
});

app.post('/test', function (req, res) {
  res.send('POST request to the homepage')
})

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