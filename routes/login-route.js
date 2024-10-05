const express = require('express');
const router = express.Router();
const { loginController } = require('../controllers/loginController');
// POST /api/login - User login
router.post('/login', loginController);

module.exports = router;
