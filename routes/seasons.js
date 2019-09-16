const express = require('express');
const router = express.Router();
const seasonController = require('../controllers/seasonController');

// @route   GET api/seasons
// @desc    Get all seasons of a tournament
// @access  Public
router.get('/tournamentId/:tournamentId', seasonController.getSeasonsByTournamentId);

// @route   POST api/seasons
// @desc    Add new season
// @access  Public
router.post('/', seasonController.addNewSeason);


module.exports = router;
