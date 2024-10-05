const User = require('../models/User');

// Get user data by ID
const getUserDataById = async (req, res) => {
  const userId = req.params.id; // Get user ID from the URL parameter

  try {
    const user = await User.findById(userId).select('-password'); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, user });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  getUserDataById,
};
