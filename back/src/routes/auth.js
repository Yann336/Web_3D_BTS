const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

// incription
router.post('/register', authController.register);

// connection
router.post('/login', (req, res) => {
  res.send('marche 2');
});

module.exports = router;
