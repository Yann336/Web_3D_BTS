const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

// incription
router.post('/register', authController.register);

// connection
router.post('/login', authController.login);

router.post('/refresh', authController.refresh);

module.exports = router;
