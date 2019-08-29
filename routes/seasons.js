const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Seasons Endpont');
});

module.exports = router;
