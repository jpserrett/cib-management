var express = require('express');
var router = express.Router();

/* GET candidate program listing. */
router.get('/', function(req, res, next) {
  res.send(candidateProgramData);
});

/* GET candidate program by candidateProgramId. */
router.get('/:candidateProgramId', function(req, res, next) {
  let candidateProgram;
  candidateProgramData.forEach(item => {
    if(item.orderNumber === req.params.candidateProgramId){ candidateProgram = item; }
  })
  res.send(candidateProgram);
});

const candidateProgramData = [
  {
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
  {
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
  {
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
  {
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
  {
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
]
module.exports = router;
