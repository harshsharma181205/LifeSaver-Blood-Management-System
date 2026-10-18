const router = require('express').Router();
const authenticate = require('../middleware/authMiddleware');
const { processRequest, matchRequest } = require('../controllers/allocationController');
router.post('/process/:request_id', authenticate, processRequest);
router.post('/match/:request_id', authenticate, matchRequest);
module.exports = router;
