const express = require('express');
const router = express.Router();
const handleIntent = require('../controllers/intentController');

// POST endpoint for Dialogflow
router.post('/', handleIntent);

module.exports = router;