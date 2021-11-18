

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

//return portfolio for given portfolio id
router.get('/:id', function(req, res, next) {
  console.log("Portfolio ID parameter is: " + req.params.id);
});


module.exports = router;
