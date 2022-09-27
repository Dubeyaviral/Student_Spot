const {register, login} = require('../controllers/userController');

var router = require('express').Router();

router.post('/login', login);
router.post('/register',register);

module.exports = router;