// controllers/authController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Register new user
const registerUser = async (req, res) => {
  const { name, email, username, password } = req.body; // Add username here

  try {
    // Check if email or username already exists
    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });
    
    if (existingEmail) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    if (existingUsername) {
      return res.status(400).json({ success: false, message: 'Username already taken' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      username,  // Add username to new user
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  registerUser,
};