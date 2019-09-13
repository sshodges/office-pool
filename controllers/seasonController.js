const bcrypt = require('bcrypt');
const { jwtUtil } = require('../utils-module/index');
const Season = require('../models/Season');

exports.addNewSeason = async (req, res) => {

  const { tournamentId, name, startDate, endDate } = req.body;

  try {

    if (isEmpty(tournamentId) || isEmpty(name) || isEmpty(startDate) || isEmpty(endDate)) {
      res.status(400).json({ errorMessage: 'Field(s) required is empty.' });
      return;
    }

    // Create Season object
    season = new Season({
      tournamentId,
      name,
      startDate,
      endDate
    });

    // Save season
    await season.save();
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
};
