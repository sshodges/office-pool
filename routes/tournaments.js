const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Tournaments Endpont');
});

module.exports = router;
