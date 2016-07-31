var mongoose = require('mongoose');

var PositionSchema = new mongoose.Schema({
  lat: Number,
  lng: Number
});

module.exports = mongoose.model('Position', PositionSchema);
