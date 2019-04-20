var express = require('express');
var router = express.Router();
var models = require('../../models');
 

router.get('/', function(req, res, next) {
 res.send("Hello")
});
 
 router.post('/create',(req,res,next)=>{
    info={};
    info.advisorID = req.body.userID;
    info.name = "SAkhi";
    info.deptID = 1;
    info.password = req.password;
    models.Advisor.create()
 })

router.get('/dashboard',(req,res,next)=>{
   res.render('index',{title:'HAHAH'});
})

// router.post('/addStudent', function(req, res, next) {
//  	models.Student.create(req.body).then(result=>{
//  		res.json(result)
//  	})
//  	.catch(err=>{
//  		res.json(err)
//  	})
// });
 
 router.post('/addAdvisor',function(req,res,next){

 })


module.exports = router;