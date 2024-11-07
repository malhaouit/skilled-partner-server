const express = require('express');
const { subscribeEmail } = require('../controllers/emailController');
const router = express.Router();

// Route to handle email subscription
router.post('/emails', subscribeEmail);

module.exports = router;