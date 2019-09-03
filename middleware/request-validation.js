const { check } = require('express-validator');

exports.userValidator = [
  check('firstName', 'First name is required')
    .not()
    .isEmpty()
    .isString()
    .withMessage('First name must be a string')
    .trim()
    .escape()
    .isLength({ max: 30 })
    .withMessage('First name can only be a maximum of 30 characters')
    .isLength({ min: 2 })
    .withMessage('First name must be at least 2 characters'),

  check('lastName', 'Last name is required')
    .not()
    .isEmpty(),

  check('email', 'Please enter a valid email')
    .not()
    .isEmpty()
    .normalizeEmail()
    .isEmail(),

  check('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/\d/)
    .withMessage('Password must contain a number')
    .matches(/[A-Z]/)
    .withMessage('Password must contain one uppercase character')
];
