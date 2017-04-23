// Empty Album Collection
// Album.remove({}, function(err) {
//   console.log('removed hopefully!')
// })

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var db = require('./db/dbconnection.js');
var Album = require('./db/models/album.js');
var ENV = require('./ENV/config.js');
var assert = require('assert');
var Promise = require('bluebird');
var React = require('react');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.listen(8080, function() {
  console.log('listening on 127.0.0.1:8080');
});

app.get('/', function(req, res) {
  res.render('./public/index');
});

// app.get('/discogs', function(req, res) {
//   var discogs = 'https://api.discogs.com/database/search?q=';

//   app.get(discogs + query + ENV.key + ENV.secret, function(req, res) {
//     res.send()
//   })
// });

app.post('/db', function(req, res) {
  var album = new Album(req.body);

  album.save(function(err, album) {
    if (err) { console.log(err); }
    res.send();
  })
})

app.get('/lists', function(req, res) {
  Album.find({}, function(err, albums) {
    res.send(albums);
  })
});

app.post('/remove', function(req, res) {
  var album = req.body;

  Album.remove({title: req.body.title}, function(err) {
    if (err) { console.log(err); }
    res.send()
  })
})

module.exports = app;

