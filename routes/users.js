const express = require('express');
const router = express.Router();
const { userValidator } = require('../middleware/request-validation');
const userController = require('../controllers/userController');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', userValidator, userController.register);

module.exports = router;
