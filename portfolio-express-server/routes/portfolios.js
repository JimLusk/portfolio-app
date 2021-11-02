var express = require('express');
var router = express.Router();

/* GET portfolios listing. */
//TODO: Update this to return a default portfolio JSON listing.
//TODO: Update this to return desired portfolio from relational database.
router.get('/', function(req, res, next) {
  res.send('GET: /portfolios route');
});

module.exports = router;
