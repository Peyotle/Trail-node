var mongoose = require('mongoose');

var TrailSchema = new mongoose.Schema({
  type: String,
  name: String,
  grade: Number,
  coordinates: Array,
  userId: String
});

module.exports = mongoose.model('Trail', TrailSchema);
