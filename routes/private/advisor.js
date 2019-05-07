var express = require('express');
var router = express.Router();
var models = require('../../models');
var methods = require('../../methods');
 

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

router.post('/addStudent',(req,res,next) => {
    console.log(req.body)
    methods.authentication.registerStudent(req.body)
    .then(re => {
        // res.send(respon)
        res.redirect('/private/advisor/dashboard')
    })
    .catch(er => {
        res.send(er)
    })
})

// router.get('/private/admin/dashboard',(req,res,next)=>{
  
//  //console.log(res)
                    
// })
router.get('/dashboard',(req,res,next)=>{

	methods.department.getDepts().then(function(result){
   //console.log("From routes");
   var dict={"data":result}
   //console.log(dict["data"])
   let depts = [];
 for (let i=0; i<dict["data"].length; i+=1) {
  depts.push(dict["data"][i].dataValues);
 }
 console.log(depts);
   // methods.course.getCourses()
   // .then(re => {
   //   console.log(re)
   //  // res.render('advisor', {"data":depts,title : 'Advisor'});
   // })
   // .catch(er => {
   //   console.log(er)
   // })

// .catch(function(err){
//      res.json({
//          "success":false,
//          "data":err
//      })
   methods.course.getAllCourseDetails()
    .then(re => {
    		
        // instead check if student has set preferences if yes , then return preference list as data
        //Else send as data the courses that can be allocated
        res.render('advisor',{title:'Setting preference',data1 : re,data:depts}) 
    })
    .catch(er => {
        console.log(er)
    })
    .catch(function(err){
     res.json({
         "success":false,
         "data":err
     })
 })
})




 router.get('/preference',(req,res,next)=>{

 methods.student.allowedCourses(req.body.regID)
    .then(re => {
        // instead check if student has set preferences if yes , then return preference list as data
        //Else send as data the courses that can be allocated
        res.render('advisor',{title:'Setting preference',data1 : re,student : req.body.regID}) 
    })
    .catch(er => {
        console.log(er)
    })
})
})


router.post('/changePassword',(req,res,next) => {
    methods.user.changePassword(req.body.userID,req.body.password)
    .then(re => {
        res.redirect('/private/advisor/dashboard')
         //Make redirection to another page saying password change successful
    })
    .catch(er => {
        res.send({success:false,error:er})
    })
})

router.get('/',(req,res,next)=>{
    methods.student.allowedCourses(req.userID)
    .then(re => {
        // instead check if student has set preferences if yes , then return preference list as data
        //Else send as data the courses that can be allocated
        res.render('student',{title:'Setting preference',data : re,student : req.userID}) 
    })
    .catch(er => {
        console.log(er)
    })
    
  });

// router.post('/preference',(req,res)=>{
//     console.log(req.body);
//     // console.log(req.decoded);
//     methods.student.getStudentID(req.body.regID)
//     .then(re=>{
//         // console.log(re)
//         var sid = re.dataValues.id;
//         var preferences = req.body;
//         console.log(preferences)
//         var Preference = [];
//         for (var pref in preferences){
//             var level = parseInt(pref[pref.length-1])
//             var cid = preferences[pref];
//             var prefObj = {
//                 courseID : cid,
//                 studentID : sid,
//                 preferenceLevel : level
//             }
//             Preference.push(prefObj);
//         }
//         methods.preference.addStudentPreference(Preference)
//         .then(re2 => {
//             // console.log(re2)
//             res.render('advisor',{title:'Setting preference',data1 : re,student : req.body.ID})
//             // res.redirect('/dashboard')
//         })
//         .catch(er2 => {
//             console.log(er2)
//         })
//    })
//     .catch(err => {
//         console.log(err)
//     })
    
// })






// router.post('/preference',(req,res)=>{
//     // methods.student.allowedCourses(req.body.regID)
//     // .then(re => {
//     //     // instead check if student has set preferences if yes , then return preference list as data
//     //     //Else send as data the courses that can be allocated
//     //     res.render('advisor',{title:'Setting preference',data1 : re,student : req.regID}) 
//     // })
//     // .catch(er => {
//     //     console.log(er)
//     // 
// // })
    
//     console.log(req.body);
//     // console.log(req.decoded);
//    //  methods.student.getStudentID(req.body.regID)
//    //  .then(re=>{
//    //      // console.log(re)
//    //      var sid = re.dataValues.id;
//    //      var preferences = req.body;
//    //      console.log(preferences)
//    //      var Preference = [];
//    //      for (var pref in preferences){
//    //          var level = parseInt(pref[pref.length-1])
//    //          var cid = preferences[pref];
//    //          var prefObj = {
//    //              courseID : cid,
//    //              studentID : sid,
//    //              preferenceLevel : level
//    //          }
//    //          Preference.push(prefObj);
//    //      }
//    //      methods.preference.addStudentPreference(Preference)
//    //      .then(re2 => {
//    //          // console.log(re2)
//    //          res.redirect('/profile')
//    //      })
//    //      .catch(er2 => {
//    //          console.log(er2)
//    //      })
//    // })
//    //  .catch(err => {
//    //      console.log(err)
//    //  })
    
// })
// // router.post('/addStudent', function(req, res, next) {
// //  	models.Student.create(req.body).then(result=>{
// //  		res.json(result)
// //  	})
// //  	.catch(err=>{
// //  		res.json(err)
// //  	})
// // });
 
 router.post('/addAdvisor',function(req,res,next){

 })


 router.post('/preference',(req,res,next) => {
     console.log(req.body)
     methods.preference.updatePreferences(req.body.regID,req.body.preference1,req.body.preference2,req.body.preference3)
     .then(re => {
        res.json({success : true })
     })
     .catch(err => {
         res.send(err)
     })
     
 })


module.exports = router;