const Season = require('../models/Season');

exports.getAllSeasons = async (req, res) => {

  try {

    let seasons = await Season.find();

    res.status(200).json(seasons);    

  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
};


exports.addNewSeason = async (req, res) => {

  const { tournamentId, name, startDate, endDate } = req.body;

  try {

    if (tournamentId == null || name == null || startDate == null || endDate == null) {
      res.status(400).json({ errorMessage: 'Field(s) required is empty.' });
      return;
    }

    season = new Season({
      tournamentId,
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
