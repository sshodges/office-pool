const express = require('express');
const router = express.Router();
const { loginValidator } = require('../middleware/request-validation');
const {
  loginRateLimiter,
  apiRateLimiter
} = require('../middleware/rate-limiters');
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', [apiRateLimiter, auth], authController.getUser);

// @route   POST api/auth
// @desc    Login user and create token
// @access  Public
router.post('/', [loginRateLimiter, loginValidator], authController.login);

module.exports = router;
