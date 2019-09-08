const mongoose = require('mongoose');

const TournamentSchema = mongoose.Schema({
  tournamentName: {
    type: String,
    required: true
  },
  tournamentType: {
    type: String,
    enum: ['Pool', 'Ping Pong'],
    required: true
  }
});

module.exports = mongoose.model('tournament', TournamentSchema);
