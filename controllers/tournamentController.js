const Tournament = require('../models/Tournament');

// get all the tournaments
exports.getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find({})
      .populate('user', '-_id firstName lastName')
      .select('-__v');
    res.status(200).json(tournaments);
  } catch {
    error => {
      console.error(error);
      res.status(500).json({ errorMessage: 'Server Error' });
    };
  }
};

//get a specific tournament

exports.getTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.tournamentId)
      .populate('user', '_id firstName lastName')
      .select('-__v -_id');

    if (!tournament)
      return res
        .status(404)
        .send('The tournament with the given ID was not found.');

    res.send(tournament);
  } catch {
    error => {
      console.error(error);
      res.status(500).json({ errorMessage: 'Server Error' });
    };
  }
};

exports.getTournamentByUser = async (req, res) => {
  try {
    const tournaments = await Tournament.find({
      user: req.user.id
    }).select('-__v');
    res.status(200).json(tournaments);
  } catch {
    error => {
      console.error(error);
      res.status(500).json({ errorMessage: 'Server Error' });
    };
  }
};

exports.addTournament = async (req, res) => {
  const { tournamentName, tournamentType, user } = req.body;
  try {
    const tournament = new Tournament({
      tournamentName,
      tournamentType,
      user
    });
    const savedTournament = await tournament.save();
    await savedTournament.populate('user', '-password').execPopulate();
    res.status(201).json({
      message: 'New Tournament Successfully added',
      savedTournament
    });
  } catch {
    error => {
      console.error(error);
      res.status(500).json({ errorMessage: 'Server Error' });
    };
  }
};
