var Trail = require('../models/trail');


exports.postTrail = function(req, res) {
  var trail = new Trail();
  console.log(req.body.coordinates);
  trail.name = req.body.name;
  trail.grade = req.body.grade;
  trail.coordinates = req.body.coordinates;
  trail.userId = req.user._id;

  trail.save(function(err) {
    if (err)
      res.send(err);

    res.json(trail)
  });
};

exports.getTrails = function(req, res) {
  Trail.find({ userId: req.user._id } ,function(err, trails) {
    if (err)
      res.send(err);

    res.json(trails);
  });
};

exports.getTrail = function(req, res) {
  Trail.find({ userId: req.user._id, _id: req.params.trail_id }, function(err, trail) {
    if (err)
      res.send(err);

    res.json(trail);
  });
};

exports.putTrail = function(req, res) {
  Trail.update({ userId: req.user._id, _id: req.params.trail_id }, function(err, trail) {
    if (err)
      res.send(err);

    if (req.body.name)
      trail.name = req.body.name;
    if (req.body.grade)
      trail.grade = req.body.grade;
    if (req.body.coordinates)
      trail.coordinates = req.body.coordinates;

    trail.save(function(err) {
      if (err)
        res.send(err);

      res.json(trail);
    });
  });
};

exports.deleteTrail = function(req, res) {
  Trail.remove({ userId: req.user._id, _id: req.params.trail_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Trail removed from the list'});
  });
};
