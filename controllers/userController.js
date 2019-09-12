const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');

exports.register = async (req, res) => {
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

    // Hash password
    user.password = await bcrypt.hash(password, 10);

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
};
