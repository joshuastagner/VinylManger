var mongoose = require('mongoose');

var albumSchema = mongoose.Schema({
  title: String,
  artist: String,
  year: Number,
  have: Boolean
});

var Album = mongoose.model('Album', albumSchema);
module.exports = Album;