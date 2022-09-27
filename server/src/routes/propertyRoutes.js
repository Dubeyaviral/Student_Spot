const {propertyRegister, getProperty}  = require('../controllers/propertyController');

var router = require('express').Router();

router.post('/registerproperty', propertyRegister);
router.get('/getproperty', getProperty);

module.exports = router;

