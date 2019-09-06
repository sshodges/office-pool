const router = express.Router();
const { registerValidator } = require('../middleware/request-validation');
const userController = require('../controllers/userController');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', registerValidator, userController.register);

module.exports = router;
