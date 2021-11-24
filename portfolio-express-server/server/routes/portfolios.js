

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
//TODO: Security: Think about and only enable access to entitled users
//TODO: Add position to portfolio
//TODO: Get real time prices for portfolio holdings
router.get('/', function(req, res, next) {
  //Get all portfolio and positions from database
  db.any("SELECT * from positions")
  .then(function (allPortfolioData) {
    res.json(allPortfolioData);
  })
  .catch(function (error) {
    res.status(500).send(error);
    console.log('ERROR:', error);
  })
});

//return portfolio for given portfolio id
router.get('/:id', function(req, res, next) {
  console.log("Portfolio ID parameter is: " + req.params.id);
  let portfolioId=Number(req.params.id);
  //portfolioObj=portfolioData[portfolioId];
  db.manyOrNone("SELECT * from positions WHERE positions.portfolio_id=$1",portfolioId)
  .then(function (manyOrNonePortfolioData) {
    //IF no portfolio found then return 404
    if (manyOrNonePortfolioData.length==0) {
      res.status(404).send("No portfolio found for Portfolio ID: " + portfolioId);
    }
    else {
      res.json(manyOrNonePortfolioData);
    }
  })
  .catch(function (error) {
    res.status(500).send(error);
    console.log('ERROR:', error);
  })
});


module.exports = router;
