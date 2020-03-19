var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(cib5BundleData);
});

/* GET user by userid. */
router.get('/:userId', function(req, res, next) {
  res.send(cib5BundleData[req.params.userId]);
});

const cib5BundleData = {
    1: {
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
      2: {
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
      3: {
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
      4: {
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
      5: {
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
}
module.exports = router;
