var express = require('express');
var router = express.Router();
var auth = require('../../middlewares/auth')


router.use('/advisor',function(req,res,next){
    if(req.body.role=='advisor'){
        next()
    }
},require('./advisor'))


// router.use('/student',function(req,res,next){
//     if(req.body.role=='student'){
//         next()
//     }
// },require('./student'))

module.exports = router;