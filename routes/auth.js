const express = require('express');
const router = express.Router();
const { loginValidator } = require('../middleware/request-validation');
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');
const { RateLimiterMongo } = require('rate-limiter-flexible');
const mongoose = require('mongoose');

const mongoConn = mongoose.connection;

const rateLimiterLogin = new RateLimiterMongo({
  storeClient: mongoConn,
  points: 5,
  duration: 300,
  blockDuration: 600,
  keyPrefix: 'rlLogin'
});

const rateLimitMiddleware = (req, res, next) => {
  rateLimiterLogin
    .consume(req.connection.remoteAddress)
    .then(() => next())
    .catch(() =>
      res.status(429).json({
        message: 'Too many login attempts'
      })
    );
};

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, authController.getUser);

// @route   POST api/auth
// @desc    Login user and create token
// @access  Public
router.post('/', rateLimitMiddleware, loginValidator, authController.login);

module.exports = router;
