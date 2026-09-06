const express = require('express');
const {
  getWorkers,
  getWorkerById,
  getMyWorkerProfile,
  createWorker,
  updateWorker,
  deleteWorker,
} = require('../controllers/workerController');
const { protect, authorize } = require('../middleware/auth');
const { ROLES } = require('../config/constants');

const router = express.Router();

router.use(protect);

router.get('/me', getMyWorkerProfile);
router.get('/', authorize(ROLES.ADMIN), getWorkers);
router.get('/:id', getWorkerById); // self-check handled in controller
router.post('/', authorize(ROLES.ADMIN), createWorker);
router.put('/:id', authorize(ROLES.ADMIN), updateWorker);
router.delete('/:id', authorize(ROLES.ADMIN), deleteWorker);

module.exports = router;
