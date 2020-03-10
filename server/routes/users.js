var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user by userid. */
router.get('/:userId', function(req, res, next) {
  res.send({
    name: 'John Doe',
    email: 'foo@foo.com',
    role: 'user',
    id: req.params
  });
});

module.exports = router;
