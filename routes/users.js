const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Bring in User model
const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    // Middleware to valididate variables being passed through
    check('firstName', 'First name is required')
      .not()
      .isEmpty(),
    check('lastName', 'Last name is required')
      .not()
      .isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    // Check if any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errorMessage: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      // Check if user email exists
      let user = await User.findOne({ email });

      // Send error if user exists
      if (user) {
        res.status(400).json({ errorMessage: 'User already exists' });
      }

      // Create User object
      user = new User({
        firstName,
        lastName,
        email,
        password
      });

      // Generate salt for password
      const salt = await bcrypt.genSalt(10);

      // Hash password
      user.password = await bcrypt.hash(password, salt);

      // Save uers
      await user.save();

      // Send back token with user id
      const tokenPayload = {
        user: {
          id: user.id
        }
      };

      //Creat JWT Token
      jwt.sign(
        tokenPayload,
        process.env.jwtSecret,
        { expiresIn: 360000 }, // Token expiry time, We can change this later
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: 'Server Error' });
    }
  }
);

module.exports = router;
