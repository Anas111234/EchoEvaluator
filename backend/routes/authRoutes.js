const express = require('express');
const { registerUser, loginUser, verifyUser, forgotPassword, resetPassword } = require('../controllers/authController');
const router = express.Router();

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Protected Route - User Verification
router.get('/protected', verifyUser, (req, res) => {
  res.status(200).json({ message: 'Access granted', user: req.user });
});

// Forgot Password - Request Security Question
router.post('/forgot-password', forgotPassword);

// Reset Password - Verify Answer and Set New Password
router.post('/reset-password', resetPassword);

module.exports = router;
