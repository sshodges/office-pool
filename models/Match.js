const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
  season: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'season'
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  loser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
});

module.exports = mongoose.model('match', MatchSchema);
