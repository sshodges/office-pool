const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');
const {
  tournamentValidator,
  objectIdValidate
} = require('../middleware/request-validation');

router.get('/', tournamentController.getTournaments);
router.get('/:tournamentId', tournamentController.getTournament);
router.get('/usertournament/:user', tournamentController.getTournamentByUser);
router.post('/', tournamentValidator, tournamentController.addTournament);

module.exports = router;
