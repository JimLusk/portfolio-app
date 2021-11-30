var express = require('express');
var router = express.Router();

/* Any request at service root */
router.all('/', function(req, res, next) {
  res.status(404).send("No endpoint found");
});

module.exports = router;
