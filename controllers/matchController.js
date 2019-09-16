const Match = require('../models/Match');

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

    if (seasonId == null || winner == null || loser == null) {
      res.status(400).json({ errorMessage: 'Field(s) required is empty.' });
      return;
    }

    match = new Match({
      seasonId,
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
