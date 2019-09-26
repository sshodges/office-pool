const Match = require('../models/Match');
var mongoose = require('mongoose');

exports.getMatchesBySeasonId = async (req, res) => {

  try {

    let matches = await Match.find({seasonId: req.params.seasonId});

    res.status(200).json(matches);    

  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
};


exports.addNewMatch = async (req, res) => {

  const { seasonId, winner, loser } = req.body;

  try {

    season = mongoose.Types.ObjectId(seasonId);

    match = new Match({
      season,
      winner,
      loser
    });

    await match.save();

    res.status(201).json({
      message: 'New Match added successfully'
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
};
