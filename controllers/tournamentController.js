const Tournament = require('../models/Tournament');

exports.getTournament = async (req, res) => {
  try {
    const tournaments = await Tournament.find({});
    res.status(200).json(tournaments);
  } catch {
    err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    };
  }
};

exports.addTournament = async (req, res) => {
  try {
    const tournament = new Tournament({
      tournamentName: req.body.tournamentName,
      tournamentType: 'Pool'
    });
    await tournament.save();

    res.status(201).json({
      message: 'New Tournament Successfully added'
    });
  } catch {
    err => {
      res.status(500).json({
        error: err
      });
    };
  }
};
