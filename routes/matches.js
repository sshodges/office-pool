const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const {matchValidator} = require('../middleware/request-validation');
const auth = require('../middleware/auth');

// @route   GET api/matches
// @desc    Get all matches of a tournament
// @access  Public
router.get('/seasonId/:seasonId', auth, matchController.getMatchesBySeasonId);

// @route   POST api/matches
// @desc    Add new match
// @access  Public
router.post('/', [auth,matchValidator], matchController.addNewMatch);

module.exports = router;
