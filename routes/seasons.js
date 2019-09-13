const express = require('express');
const router = express.Router();
const seasonController = require('../controllers/seasonController');


router.get('/', async (req, res) => {
  res.send('Seasons Endpont');
});

// @route   GET api/seasons
// @desc    Get all seasons of a tournament
// @access  Public
// router.get('/', seasonController.getAllSeasons);

// @route   POST api/seasons
// @desc    Add new season
// @access  Public
router.post('/', seasonController.addNewSeason);


module.exports = router;
