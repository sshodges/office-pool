const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');
const {
  tournamentValidator,
  objectIdValidate
} = require('../middleware/request-validation');

const auth = require('../middleware/auth');

router.get('/usertournament', auth, tournamentController.getTournamentByUser);
router.get('/', auth, tournamentController.getTournaments);
router.get('/:tournamentId', auth, tournamentController.getTournament);
router.post(
  '/',
  [auth, tournamentValidator],
  tournamentController.addTournament
);

module.exports = router;
