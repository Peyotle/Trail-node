var Site = require('../models/site');

exports.postSite = function(req, res) {
  var site = new Site({
    name: req.body.name,
    category: req.body.category,
    coordinates: req.body.coordinates,
    userId: req.user._id,
    type: "Site"
  });
  site.save(function(err) {
    if (err)
      res.send(err);

    res.json(site)
  });
};

exports.getSites = function(req, res) {
  Site.find(function(err, sites){
    if (err)
      res.send(err);

    console.log(json(sites));
    res.json(sites)
  })
}
