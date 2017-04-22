var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var db = require('./db/dbconnection.js');
var Album = require('./db/models/album.js');
var requestHandler = require('./lib/request-handler.js');
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

app.post('/db', function(req, res) {
  var album = new Album(req.body);

  console.log(req.body);

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

// Album.remove({}, function(err) {
//   console.log('removed hopefully!')
// })

module.exports = app;







var testObj = {artist: 'Radiohead', title: 'Kid A'}
























// app.get('/testDataBase', function(req, res) { 
  
//   var drukqs = new Album({
//     title: 'Drukqs',
//     artist: 'Aphex Twin',
//     year: '2001',
//     have: false
//   }); 


//   drukqs.save(function(err, album) {
//     if (err) { console.log(err); }
    
//     Album.findOne({title: album.title}, function(err, album) {
//       if (err) { console.log(err); }
//       res.send(album);
//     })
//   });
// });