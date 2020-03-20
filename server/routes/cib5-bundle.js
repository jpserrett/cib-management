var express = require('express');
var router = express.Router();

/* GET cib5 bundles listing. */
router.get('/', function(req, res, next) {
  res.send(cib5BundleData);
});

/* GET cib5 bundle by cib5BundleId. */
router.get('/:cib5BundleId', function(req, res, next) {
  let cib5Bundle;
  cib5BundleData.forEach(item => {
    if(item.nsn === req.params.cib5BundleId){ cib5Bundle = item; }
  })
  res.send(cib5Bundle);
});

const cib5BundleData = [
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
        cib5s: []
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
        cib5s: []
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
        cib5s: []
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
        cib5s: []
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
        cib5s: []
      }
    ]
module.exports = router;
