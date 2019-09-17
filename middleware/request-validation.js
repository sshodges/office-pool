const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');

exports.registerValidator = [
  // First Name Validation
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
  // Last Name Validation
  check('lastName', 'Last name is required')
    .not()
    .isEmpty(),
  // Email Validation
  check('email', 'Please enter a valid email')
    .not()
    .isEmpty()
    .normalizeEmail()
    .isEmail(),
  // Password Validation
  check('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/\d/)
    .withMessage('Password must contain a number')
    .matches(/[A-Z]/)
    .withMessage('Password must contain one uppercase character'),

  // Check if validation passes, otherwise block endpoint
  function(req, res, next) {
    var errorValidation = validationResult(req);
    if (!errorValidation.isEmpty()) {
      return res.status(400).json({
        errorMessage: errorValidation
      });
    }
    next();
  }
];

exports.loginValidator = [
  // Email Validation
  check('email', 'Please enter a valid email')
    .not()
    .isEmpty()
    .normalizeEmail()
    .isEmail(),
  // Password Validation
  check('password').exists(),
  // Check if validation passes, otherwise block endpoint
  function(req, res, next) {
    var errorValidation = validationResult(req);
    if (!errorValidation.isEmpty()) {
      return res.status(400).json({
        errorMessage: errorValidation
      });
    }
    next();
  }
];

exports.tournamentValidator = [
  check('tournamentName', 'Please enter a valid tournament name')
    .not()
    .isEmpty()
    .isLength({ min: 5 })
    .withMessage('Tournament Name must be at least 5 characters long'),
  check('tournamentType')
    .contains('Pool', 'Ping Pong')
    .withMessage('Tournament type can only be Pool or Ping-Pong'),
  check('user').isMongoId(),

  // Check if validation passes, otherwise block endpoint
  function(req, res, next) {
    var errorValidation = validationResult(req);
    if (!errorValidation.isEmpty()) {
      return res.status(400).json({
        errorMessage: errorValidation
      });
    }
    next();
  }
];
