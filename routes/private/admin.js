var express = require('express');
var router = express.Router();
var models = require('../../models');
var methods = require('../../methods')

router.get('/', function(req, res, next) {
 res.send("Hello")
});
 
router.post('/addAdmin',(req,res,next) => {
    console.log(req.body)
    methods.authentication.registerAdmin(req.body)
    .then(re => {
        res.send(re)
    })
    .catch(er => {
        res.send(er)
    })
})

router.post('/addAdvisor',(req,res,next) => {
    console.log(req.body)
    methods.authentication.registerAdvisor(req.body)
    .then(re => {
        //req.flash('success_msg', 'Advisor added successfully!');
        res.redirect('/private/admin/dashboard')
    })
    .catch(er => {
        res.send(er)
    })
})

// router.post('/addStudent',(req,res,next) => {
//     console.log(req.body)
//     methods.authentication.registerStudent(req.body)
//     .then(re => {
//         res.send(re)
//     })
//     .catch(er => {
//         res.send(er)
//     })
// })

router.post('/addCourse',(req,res,next) => {
    console.log(req.body)
    var new1=req.body
    new1['filled']=0
    methods.course.addCourse(new1)
    .then(re => {
        res.redirect('/private/admin/dashboard')
    })
    .catch(er => {
        res.send(er)
    })
})

router.get('/allot',(req,res,next) =>{
    methods.allotment.allot()
    .then(re => {
        res.redirect('/allotmentList')
    })
    .catch(er => {
        res.send(er)
    })
})

router.post('/changePassword',(req,res,next) => {
    methods.user.changePassword(req.body.userID,req.body.password)
    .then(re => {
        res.redirect('/private/admin/dashboard') //Make redirection to another page saying password change successful
    })
    .catch(er => {
        res.send({success:false,error:er})
    })
})

router.post('/deleteCourse',(req,res,next) => {
    console.log("id:",req.body.name)
    console.log("courseid:",req.body.courseID)
    methods.course.deleteCourse(req.body.courseID,)
    .then(re => {
        res.redirect('/private/admin/dashboard') //Make redirection to another page saying password change successful
    })
    .catch(er => {
        res.send({success:false,error:er})
    })
})

module.exports = router