const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Matches Endpont');
});

module.exports = router;
