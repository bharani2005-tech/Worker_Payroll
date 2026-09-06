const express = require('express');
const {
  getWorkEntries,
  createWorkEntry,
  updateWorkEntry,
  deleteWorkEntry,
  bulkImportWorkEntries,
} = require('../controllers/workEntryController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');
const { ROLES } = require('../config/constants');

const router = express.Router();

router.use(protect);

router.get('/', getWorkEntries); // workers see only their own, admins see all/filtered
router.post('/', authorize(ROLES.ADMIN), createWorkEntry);
router.post('/bulk-import', authorize(ROLES.ADMIN), upload.single('file'), bulkImportWorkEntries);
router.put('/:id', authorize(ROLES.ADMIN), updateWorkEntry);
router.delete('/:id', authorize(ROLES.ADMIN), deleteWorkEntry);

module.exports = router;
