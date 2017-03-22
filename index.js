var https = require('https');
var fs = require('fs');
var express = require('express');
var xml = require('xml');

var app = express();


app.get('/', function (req, res) {
  res.send('hello');
});

app.get('/ampache/server/xml.server.php', function (req, res) {
  res.set('Content-Type', 'text/xml');
  res.send(xml({
    root: [{
      auth: '1234567890123456789012345678901'
    }, {
      version: 1
    }, {
      update: new Date().toISOString()
    }, {
      add: new Date().toISOString()
    }, {
      clean: new Date().toISOString()
    }, {
      songs: 0
    }, {
      artists: 0
    }, {
      albums: 0
    }, {
      tags: 0
    }, {
      videos: 0
    }]
  }));
});

var options = {
  key: fs.readFileSync('config/ssl/key.pem'),
  cert: fs.readFileSync('config/ssl/cert.pem')
};

https.createServer(options, app).listen(9443, function () {
  console.log('The server is listening');
});