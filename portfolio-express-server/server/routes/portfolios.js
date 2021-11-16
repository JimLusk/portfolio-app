

var express = require('express');
var router = express.Router();
//temporary declaration of mock data portfolios
var portfolioData = require('../data/portfolio-data-100-records.json');



/* GET portfolios listing. */
//TODO: Update this to return a default portfolio JSON listing.
//TODO: Update this to return desired portfolio from relational database.
router.get('/', function(req, res, next) {
  res.json(portfolioData);
});


module.exports = router;
