var Place = require('../models/place');

exports.postPlace = function(req, res) {
  var place = new Place({
    name: req.body.name,
    type: req.body.type,
    coordinate: req.body.coordinate,
    userId: req.user._id
  });
  place.save(function(err) {
    if (err)
      res.send(err);

      res.json({message: "New Place Added"})
  });
};

exports.getPlaces = function(req, res) {
  Place.find(function(err, places){
    if (err)
      res.send(err);

    res.json(places)
  })
}
