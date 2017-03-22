var https = require('https');
var fs = require('fs');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello');
});

var options = {
  key: fs.readFileSync('config/ssl/key.pem'),
  cert: fs.readFileSync('config/ssl/cert.pem')
};

https.createServer(options, app).listen(9443, function () {
  console.log('The server is listening');
});