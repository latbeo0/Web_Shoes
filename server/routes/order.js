const router = require('express').Router();
const orderCtrl = require('../controllers/orderCtrl');

router.post('/payment', orderCtrl.payment);

module.exports = router;
