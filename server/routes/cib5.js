var express = require('express');
var router = express.Router();

/* GET cib5 listing. */
router.get('/', function(req, res, next) {
  res.send(cib5Data);
});

/* GET cib5 by cib5Id. */
router.get('/:cib5Id', function(req, res, next) {
  let cib5;
  cib5Data.forEach(item => {
    if(item.nsn === req.params.cib5Id){ cib5 = item; }
  })
  res.send(cib5);
});

const cib5Data = [
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
        cib1s: []
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
        cib1s: []
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
        cib1s: []
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
        cib1s: []
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
        cib1s: []
      }
    ]
module.exports = router;
