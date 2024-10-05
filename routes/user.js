const express = require('express');
const router = express.Router();
const { getUserDataById } = require('../controllers/userController'); // Import the new controller function

// GET /api/user/:id - Fetch user data by ID
router.get('/get/:id', getUserDataById); // No middleware applied

module.exports = router;
