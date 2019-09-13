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
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  ]
});

module.exports = mongoose.model('tournament', TournamentSchema);
