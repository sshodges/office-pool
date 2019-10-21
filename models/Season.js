const mongoose = require('mongoose');

const SeasonSchema = mongoose.Schema({
  tournament: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tournament'
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
  },
  currentSeason: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('season', SeasonSchema);
