const express = require('express');
const router = express.Router();
const { loginValidator } = require('../middleware/request-validation');
const authController = require('../controllers/authController');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', authController.getUser); // Add Auth Middleware when done

// @route   POST api/auth
// @desc    Login user and create token
// @access  Public
router.post('/', loginValidator, authController.login);

module.exports = router;
