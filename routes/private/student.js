var express = require('express');
var router = express.Router();
var models = require('../../models');
var methods = require('../../methods');

router.get('/',(req,res,next)=>{
    // console.log(req.userID)
    // console.log(methods)
    methods.student.allowedCourses(req.userID)
    .then(re => {
        // console.log(re)
    //   res.render('student',{title:'Setting preference',data : re})
        res.render('student',{title:'Setting preference',data : re})
    })
    .catch(er => {
        console.log(er)
    })
    // res.render('student',{title:'Setting preference',data : [ { id: 1, name: 'CN', courseID: 'C01' },
    // { id: 2, name: 'COA', courseID: 'C02' },
    // { id: 3, name: 'MOS', courseID: 'C03' } ]})
  });

router.post('/preference',(req,res)=>{
    console.log(req.body);
    // console.log(req.decoded);
    methods.student.getStudentID(req.decoded.id)
    .then(re=>{
        // console.log(re)
        var sid = re.dataValues.id;
        var preferences = req.body;
        console.log(preferences)
        var Preference = [];
        for (var pref in preferences){
            var level = parseInt(pref[pref.length-1])
            var cid = preferences[pref];
            var prefObj = {
                courseID : cid,
                studentID : sid,
                preferenceLevel : level
            }
            Preference.push(prefObj);
        }
        methods.preference.addStudentPreference(Preference)
        .then(re2 => {
            // console.log(re2)
            res.redirect('/profile')
        })
        .catch(er2 => {
            console.log(er2)
        })
   })
    .catch(err => {
        console.log(err)
    })
    
})

module.exports = router