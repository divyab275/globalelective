var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/profile',(req,res,next)=>{
  res.render('index',{title:'Profile'})
})

console.log(auth)
router.use('/users',require('./users'))
router.use('/departments',require('./department'))
router.use('/students',require('./student'))
// router.use('/users',require('./user'))
router.use('/register',require('./register'))
router.use('/private',auth,require('./private'))

module.exports = router;
