const router = require('express').Router();
const authenticate = require('../middleware/authMiddleware');
const { confirmDonation } = require('../controllers/donationController');
router.post('/:request_id', authenticate, confirmDonation);
module.exports = router;
