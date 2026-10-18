const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const { registerOrganization, listStates, listCities, listOrganizations, updateOrganizationLocation } = require('../controllers/organizationController');
const router = express.Router();

// Directory contains real registered provider names and locations, without account credentials.
router.post('/', registerOrganization);
router.get('/states', listStates);
router.get('/cities', listCities);
router.get('/', listOrganizations);
router.put('/me/location', authenticate, updateOrganizationLocation);

module.exports = router;
