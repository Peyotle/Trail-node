var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
  name: String,
  type: Number,
  coordinate: Array,
  userId: String
});

module.exports = mongoose.model('Place', PlaceSchema);
