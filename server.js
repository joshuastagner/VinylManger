var express = require('express');
var path = require('path');
var db = require('./db/dbconnection.js');
var assert = require('assert');

var app = express();

app.get('/', function(req, res) {
  res.send('Blank Canvas!');
});


app.listen(8080, function() {
  console.log('listening on 127.0.0.1:8080');
});

