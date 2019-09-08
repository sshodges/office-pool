const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');

router.get('/', tournamentController.getTournament);
router.post('/', tournamentController.addTournament);

module.exports = router;
