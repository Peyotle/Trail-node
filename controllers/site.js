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

    console.log(site);
    res.json(site)
  });
};

exports.getSites = function(req, res) {

  var query = req.query.query;
  if (query) {
    query = JSON.parse(query);
    console.log(query.coordinates.$geoWithin);
    Site.find(query, function(err, sites){
      if (err)
        res.send(err);

      console.log("Query " + sites);
      res.json(sites)
    })
  } else {
    Site.find(function(err, sites){
      if (err)
        res.send(err);

      console.log(sites);
      res.json(sites)
    })
  }


}
