var mongoose = require('mongoose');

var CoordinateSchema = new mongoose.Schema({
  lat: Number,
  lng: Number
});

module.exports = mongoose.model('Coordinate', CoordinateSchema);
