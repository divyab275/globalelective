var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});



router.use('/users',require('./users'))
router.use('/departments',require('./department'))
router.use('/students',require('./student'))
// router.use('/users',require('./user'))
router.use('/register',require('./private/register'))

module.exports = router;
