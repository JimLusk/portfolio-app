

var express = require('express');
const { response } = require('../app');
var router = express.Router();
//temporary declaration of mock data portfolios
var portfolioData = require('../data/portfolio-data-100-records.json');
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://admin:admin@localhost:5432/portfolio-db')


//const db = require('../services/db');



/* GET portfolios listing. */
//TODO: Externalize SQL to configuration
//TODO: Format return of all portfolios
//TODO: Handle return of single portfolios
//TODO: Security: Think about and only enable access to entitled users
//TODO: Add position to portfolio
//TODO: Get real time prices for portfolio holdings
router.get('/', function(req, res, next) {
  //Get all portfolio and positions from database
  db.any("SELECT * from positions")
  .then(function (data) {
    res.json(data);
  })
  .catch(function (error) {
    res.status(500).send(error);
    console.log('ERROR:', error);
  })
});

//return portfolio for given portfolio id
router.get('/:id', function(req, res, next) {
  console.log("Portfolio ID parameter is: " + req.params.id);
  let portfolioId=Number(req.params.id)-1;
  portfolioObj=portfolioData[portfolioId];
  if (portfolioObj==null) {
    res.status(404).send("Portfolio ID " + portfolioId + " not found.");
  } else {
    res.send(portfolioObj);
  }
  
});


module.exports = router;
