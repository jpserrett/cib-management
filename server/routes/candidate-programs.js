var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(candidatePrograms);
});

/* GET user by userid. */
router.get('/:userId', function(req, res, next) {
  res.send(candidatePrograms[req.params.userId]);
});

const candidatePrograms = {
  1: {
    cib5s: [],
    cib1s: [],
    cib5Bundles: [],
    volumesAllocated: 250,
    volumesProduces: 55,
    quartersAllocated: 3380,
    quartersProduced: 1101,
    budgetUsed: '',
    budgetOrdered: '',
    budgetCompleted: '',
    orderNumber: 'DOA456'
  }, 
  2: {
    cib5s: [],
    cib1s: [],
    cib5Bundles: [],
    volumesAllocated: 250,
    volumesProduces: 55,
    quartersAllocated: 3380,
    quartersProduced: 1101,
    budgetUsed: '',
    budgetOrdered: '',
    budgetCompleted: '',
    orderNumber: 'DOB123'
  },
  3: {
    cib5s: [],
    cib1s: [],
    cib5Bundles: [],
    volumesAllocated: 250,
    volumesProduces: 55,
    quartersAllocated: 3380,
    quartersProduced: 1101,
    budgetUsed: '',
    budgetOrdered: '',
    budgetCompleted: '',
    orderNumber: 'DOC789'
  },
  4: {
    cib5s: [],
    cib1s: [],
    cib5Bundles: [],
    volumesAllocated: 250,
    volumesProduces: 55,
    quartersAllocated: 3380,
    quartersProduced: 1101,
    budgetUsed: '',
    budgetOrdered: '',
    budgetCompleted: '',
    orderNumber: 'DOF876'
  },
  5: {
    cib5s: [],
    cib1s: [],
    cib5Bundles: [],
    volumesAllocated: 250,
    volumesProduces: 55,
    quartersAllocated: 3380,
    quartersProduced: 1101,
    budgetUsed: '',
    budgetOrdered: '',
    budgetCompleted: '',
    orderNumber: 'DOG999'
  }
}
module.exports = router;
