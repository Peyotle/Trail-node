var mongoose = require('mongoose');

var SiteSchema = new mongoose.Schema({
  type: String,
  name: String,
  category: Number,
  coordinates: Array,
  userId: String
});

module.exports = mongoose.model('Site', SiteSchema);
