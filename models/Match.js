const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
  seasonId: {
    type: String, //TODO change this to Season
    required: true
  },
  winner: {
    type: String, //TODO change this to User
    required: true
  },
  loser: {
    type: String, //TODO change this to User
    default: Date.now
  },
});

module.exports = mongoose.model('match', MatchSchema);
