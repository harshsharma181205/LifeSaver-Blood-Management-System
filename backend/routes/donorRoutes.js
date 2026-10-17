const router = require('express').Router();
const authenticate = require('../middleware/authMiddleware');
const { registerDonor, getMatchingRequests, updateAvailability, respondToRequest, updateLocation } = require('../controllers/donorController');
router.post('/', registerDonor);
router.get('/me/matching-requests', authenticate, getMatchingRequests);
router.patch('/me/availability', authenticate, updateAvailability);
router.put('/me/location', authenticate, updateLocation);
router.post('/me/requests/:request_id/response', authenticate, respondToRequest);
module.exports = router;
