const express = require('express');
const router = express.Router();
const seasonController = require('../controllers/seasonController');
const {seasonValidator} = require('../middleware/request-validation');
const auth = require('../middleware/auth');

// @route   GET api/seasons
// @desc    Get all seasons of a tournament
// @access  Public
router.get('/tournamentId/:tournamentId', auth, seasonController.getSeasonsByTournamentId);

// @route   POST api/seasons
// @desc    Add new season
// @access  Public
router.post('/', [auth, seasonValidator], seasonController.addNewSeason);


module.exports = router;
