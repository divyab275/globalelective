var express = require('express');
var router = express.Router();
var models = require('../../models');
var methods  = require('../../methods')

router.get('/', function(req, res, next) {
 res.send("Hello")
});
 
 router.post('/addUser',function(req,res,next){
   
     info = req.body
    methods.user.addUser(info)
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(err)
    })
 })

// router.put('/:id', function(req, res, next) {
 
// });
 
 

// router.delete('/:id', function(req, res, next) {
 
// });
 
module.exports = router;