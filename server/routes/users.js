var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user by userid. */
router.get('/:userId', function(req, res, next) {
  res.send(usersData[req.params.userId]);
});

const usersData = {
  1: {
    name: 'John Doe',
    email: 'jdoe@gloogle.com',
    role: 'user'
  }, 
  2: {
    name: 'Jane Doe',
    email: 'jdoe2@gloogle.com',
    role: 'admin'
  },
  3: {
    name: 'Frank N. Stein',
    email: 'monsterman@hatesfire.com',
    role: 'user'
  },
  4: {
    name: 'Kurt Vagner',
    email: 'bamf@xforce.com',
    role: 'approver'
  },
  5: {
    name: 'Kayleigh Frye',
    email: 'shiny_engineer@firefly.com',
    role: 'admin'
  }
}
module.exports = router;
