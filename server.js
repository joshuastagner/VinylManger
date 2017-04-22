var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var db = require('./db/dbconnection.js');
var Album = require('./db/models/album.js');
var requestHandler = require('./lib/request-handler.js');
var assert = require('assert');
var Promise = require('bluebird');
var React = require('react');

var app = express();
app.set('views', __dirname);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.listen(8080, function() {
  console.log('listening on 127.0.0.1:8080');
});

app.get('/', function(req, res) {
  res.render('./public/index');
});


module.exports = app;
































app.get('/testDataBase', function(req, res) { 
  
  var drukqs = new Album({
    title: 'Drukqs',
    artist: 'Aphex Twin',
    year: '2001',
    have: false
  }); 


  drukqs.save(function(err, album) {
    if (err) { console.log(err); }
    
    Album.findOne({title: album.title}, function(err, album) {
      if (err) { console.log(err); }
      res.send(album);
    })
  });
});