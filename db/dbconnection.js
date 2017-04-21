var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/vinylTunes');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongoose connection error!'));

db.once('open', function() {
  console.log('Mongoose connection success!');
});

module.exports = db;