var express = require('express');
var router = express.Router();
var auth = require('../../middlewares/auth')


router.use('/advisor',require('./advisor'))
router.use('/user',require('./user'))
router.use('/course',require('./course'))
router.use('/student',require('./student'))

// router.use('/student',function(req,res,next){
//     if(req.body.role=='student'){
//         next()
//     }
// },require('./student'))

module.exports = router;