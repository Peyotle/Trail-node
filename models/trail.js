var mongoose = require('mongoose');

var TrailSchema = new mongoose.Schema({
  name: String,
  grade: Number,
  coordinates: Array,
  userId: String
});

module.exports = mongoose.model('Trail', TrailSchema);
