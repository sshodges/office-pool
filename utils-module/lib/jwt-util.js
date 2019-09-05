const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createToken = function(user) {
  return new Promise((resolve, reject) => {
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
      { expiresIn: process.env.jwtExpireTime },
      (err, token) => {
        if (err) {
          reject(error);
        } else {
          resolve({ token });
        }
      }
    );
  });
};
