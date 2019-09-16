const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

// @route   GET api/matches
// @desc    Get all matches of a tournament
// @access  Public
router.get('/seasonId/:seasonId', matchController.getMatchesBySeasonId);

// @route   POST api/matches
// @desc    Add new match
// @access  Public
router.post('/', matchController.addNewMatch);

module.exports = router;
