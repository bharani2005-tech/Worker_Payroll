const express = require('express');
const { exportCsv, exportExcel, exportPdf } = require('../controllers/reportController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.get('/export/csv', exportCsv);
router.get('/export/excel', exportExcel);
router.get('/export/pdf', exportPdf);

module.exports = router;
