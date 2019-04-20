var express = require('express');
var router = express.Router();
var models = require('../../models');
var methods = require('../../methods');

router.get('/',(req,res)=>{
    res.json({Success : true});
})

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
        console.log(Preference);
   })
    .catch()
    
})

module.exports = router