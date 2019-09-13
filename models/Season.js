const mongoose = require('mongoose');

const SeasonSchema = mongoose.Schema({
  tournamentId: {
    type: String, //TODO change this
    required: true
  },
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('season', SeasonSchema);
