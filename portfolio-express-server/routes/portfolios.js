var express = require('express');
var router = express.Router();

/* GET portfolios listing. */
router.get('/', function(req, res, next) {
  res.send('This is the call into the portfolios route');
});

module.exports = router;
