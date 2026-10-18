const router = require('express').Router();
const authenticate = require('../middleware/authMiddleware');
const { createRequest, getRequests, getRequestById, cancelRequest } = require('../controllers/requestController');
router.use(authenticate);
router.post('/', createRequest);
router.get('/', getRequests);
router.get('/:requestId', getRequestById);
router.patch('/:requestId/cancel', cancelRequest);
module.exports = router;
