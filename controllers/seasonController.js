const Season = require('../models/Season');
var mongoose = require('mongoose');

exports.getSeasonsByTournamentId = async (req, res) => {

  try {
    let seasons = await Season.find({tournament: req.params.tournamentId});

    res.status(200).json(seasons);    

  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
};


exports.addNewSeason = async (req, res) => {

  const { tournamentId, name, startDate, endDate } = req.body;

  tournament = mongoose.Types.ObjectId(tournamentId);

  try {
    season = new Season({
      tournament,
      name,
      startDate,
      endDate
    });

    await season.save();

    res.status(201).json({
      message: 'New Season added successfully'
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
};
