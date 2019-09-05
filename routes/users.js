const express = require('express');
const router = express.Router();
<<<<<<< Updated upstream

router.get('/', async (req, res) => {
  res.send('Users Endpont');
});
=======
const { registerValidator } = require('../middleware/request-validation');
const userController = require('../controllers/userController');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', registerValidator, userController.register);
>>>>>>> Stashed changes

module.exports = router;
