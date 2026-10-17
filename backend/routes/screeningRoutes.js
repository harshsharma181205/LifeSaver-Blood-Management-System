const router = require('express').Router();
const authenticate = require('../middleware/authMiddleware');
const { recordScreening } = require('../controllers/screeningController');
router.post('/:request_id', authenticate, recordScreening);
module.exports = router;
