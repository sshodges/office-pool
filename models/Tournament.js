const mongoose = require('mongoose');
const FKHelper = require('../utils-module/lib/foreign-key-validator');

const TournamentSchema = mongoose.Schema({
  tournamentName: {
    type: String,
    required: true
  },
  tournamentType: {
    type: String,
    enum: ['pool', 'ping-pong'],
    required: true
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      validate: {
        validator: function(v) {
          return FKHelper(mongoose.model('user'), v);
        },
        message: `Tag doesn't exist`
      }
    }
  ]
});

module.exports = mongoose.model('tournament', TournamentSchema);
