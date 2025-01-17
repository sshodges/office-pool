const { check, validationResult, body } = require('express-validator');
const mongoose = require('mongoose');
const { fkHelper } = require('../utils-module/index');

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
    .isEmpty()
    .isString()
    .withMessage('Last name must be a string')
    .trim()
    .escape()
    .isLength({ max: 30 })
    .withMessage('Last name can only be a maximum of 30 characters'),
  // Email Validation
  check('email', 'Please enter a valid email')
    .not()
    .isEmpty()
    .trim()
    .escape()
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
    .withMessage('Tournament Name must be at least 5 characters long')
    .trim()
    .escape(),
  check('tournamentType')
    .contains('pool', 'ping-pong')
    .withMessage('Tournament type can only be Pool or Ping-Pong'),
  body('user').custom(v => {
    return fkHelper(mongoose.model('user'), v);
  }),

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

exports.seasonValidator = [
  check('name', 'Please enter a valid season name')
    .not()
    .isEmpty()
    .isLength({ min: 5 })
    .withMessage('Season Name must be at least 5 characters long')
    .trim()
    .escape(),
  check('startDate', 'Please enter a valid starting date')
    .not()
    .isEmpty()
    .isISO8601()
    .withMessage('Tournament starting date must be valid'),
  check('endDate', 'Please enter a valid ending date')
    .not()
    .isEmpty()
    .isISO8601()
    .withMessage('Tournament ending date must be valid'),
  body('tournamentId').custom(v => {
    return fkHelper(mongoose.model('tournament'), v);
  }),

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

exports.matchValidator = [
  body('seasonId').custom(v => {
    return fkHelper(mongoose.model('season'), v);
  }),
  body('winner').custom(v => {
    return fkHelper(mongoose.model('user'), v);
  }),
  body('loser').custom(v => {
    return fkHelper(mongoose.model('user'), v);
  }),

  // Check if validation passes, otherwise block endpoint
  function(req, res, next) {
    var errorValidation = validationResult(req);
    if (!errorValidation.isEmpty()) {
      return res.status(400).json({
        errorMessage: errorValidation
      });
    }
    next();
  }
];
