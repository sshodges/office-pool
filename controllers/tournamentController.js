const Tournament = require('../models/Tournament');

// get all the tournaments
exports.getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find({}).populate(
      'user',
      'firstName lastName'
    );
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

//get a specifica tournament

exports.getTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.tournamentId)
      .populate('user', 'firstName lastName')
      .select('-__v');

    if (!tournament)
      return res
        .status(404)
        .send('The tournament with the given ID was not found.');

    res.send(tournament);
  } catch {
    err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message:
            'Tournament Record not found with id ' + req.params.tournamentId
        });
      }
    };
  }
};

exports.getTournamentByUser = async (req, res) => {
  try {
    const tournaments = await Tournament.find({ user: req.params.user }).select(
      '-__v'
    );
    res.send(tournaments);
  } catch {
    err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.tournamentId
        });
      }
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
    err => {
      res.status(500).json({
        error: err
      });
    };
  }
};
