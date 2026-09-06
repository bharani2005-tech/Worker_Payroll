const express = require('express');
const { getPayments, generatePayroll, markPayment, deletePayment } = require('../controllers/paymentController');
const { protect, authorize } = require('../middleware/auth');
const { ROLES } = require('../config/constants');

const router = express.Router();

router.use(protect);

router.get('/', getPayments); // workers see only their own, admins see all/filtered
router.post('/generate', authorize(ROLES.ADMIN), generatePayroll);
router.put('/:id/mark', authorize(ROLES.ADMIN), markPayment);
router.delete('/:id', authorize(ROLES.ADMIN), deletePayment);

module.exports = router;
