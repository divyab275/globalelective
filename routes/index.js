var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')
var methods=require('../methods')
var models=require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  // if(req.session.token){
  //   //Token already present , destroy
  //   req.session.destroy(function(){
  //     console.log("user logged out.")
  //  });
  // }
  
  res.render('login', { title: 'Login' });
});

router.get('/profile',(req,res,next)=>{
  
  if(req.session.token){
    console.log("token present");
    res.render('index',{title:'Profile'}) 
  }else{
    console.log("No token")
  }
 
});


router.get('/advisor',(req,res,next)=>{
  res.render('advisor',{title:'Advisor Dash'})
});



router.get('/logout',(req,res)=>{
  req.session.destroy(function(){
    console.log("user logged out.")
 });
 res.redirect('/');
})






console.log(auth)
router.use('/users',require('./users'))
router.use('/departments',require('./department'))
router.use('/students',require('./student'))
router.use('/allotment',require('./allotment'))

// router.use('/users',require('./user'))
router.use('/register',require('./register'))
router.use('/private',auth,require('./private'))
//router.use('/private',require('./private'))

router.get('/private/advisordashboard',(req,res,next)=>{
 //get all sudent data 
  res.render('advisor',{title:'advisor'})
  
})



router.get('/private/admin/dashboard',(req,res,next)=>{
  methods.department.getDepts().then(function(result){
   //console.log("From routes");
   var dict={"data":result}
   //console.log(dict["data"])
   let depts = [];
 for (let i=0; i<dict["data"].length; i+=1) {
  depts.push(dict["data"][i].dataValues);
 }
 console.log(depts);
   methods.course.getCourses()
   .then(re => {
     console.log(re)
    res.render('admindashboard', {"data":depts,title : 'Admin Dashboard',course :re});
   })
   .catch(er => {
     console.log(er)
   })
 }).catch(function(err){
     res.json({
         "success":false,
         "data":err
     })
 })
 //console.log(res)
                    
})
// router.get('/private/admin')



router.get('/allotmentlist',(req,res) => {
  methods.allotment.getAllotmentList()
  .then(re => {
    res.render('allotmentlist',{title : "Allotment",data : re})
  })
  .catch(er => {

  })
  
})

module.exports = router;
