var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(cib1Data);
});

/* GET user by userid. */
router.get('/:cib1Id', function(req, res, next) {
  let cib1;
  cib1Data.forEach(item => {
    if(item.nsn === req.params.cib1Id){ cib1 = item; }
  })
  res.send(cib1);
});

const cib1Data = [
  {
    edition: 1,
    nsn: 'ABC123',
    prodStatus: 'IN WORK',
    producer: 'Harris',
    classification: 'U',
    cellCurrencyYear: 2005,
    prodDate: '',
    gatewayLoadDate: '',
    shippedToGatewayDate: '',
    nwCoord: 90,
    neCoord: 90,
    swCoord: 90,
    seCoord: 90
  }, 
  {
    edition: 2,
    nsn: 'DEF456',
    prodStatus: 'IN WORK',
    producer: 'BAE',
    classification: 'U',
    cellCurrencyYear: 2018,
    prodDate: '',
    gatewayLoadDate: '',
    shippedToGatewayDate: '',
    nwCoord: 90,
    neCoord: 90,
    swCoord: 90,
    seCoord: 90
  },
  {
    edition: 1,
    nsn: 'XYZ789',
    prodStatus: 'COMPLETED',
    producer: 'Harris',
    classification: 'U',
    cellCurrencyYear: 2009,
    prodDate: '',
    gatewayLoadDate: '',
    shippedToGatewayDate: '',
    nwCoord: 90,
    neCoord: 90,
    swCoord: 90,
    seCoord: 90
  },
  {
    edition: 1,
    nsn: 'GHI567',
    prodStatus: 'PROCESSED',
    producer: 'BAE',
    classification: 'U',
    cellCurrencyYear: 2010,
    prodDate: '',
    gatewayLoadDate: '',
    shippedToGatewayDate: '',
    nwCoord: 90,
    neCoord: 90,
    swCoord: 90,
    seCoord: 90
  },
  {
    edition: 3,
    nsn: 'ABC678',
    prodStatus: 'COMPLETED',
    producer: 'Harris',
    classification: 'U',
    cellCurrencyYear: 2019,
    prodDate: '',
    gatewayLoadDate: '',
    shippedToGatewayDate: '',
    nwCoord: 90,
    neCoord: 90,
    swCoord: 90,
    seCoord: 90
  }
]
module.exports = router;
