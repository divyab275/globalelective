var express = require('express');
var router = express.Router();
var models = require('../../models');
var methods = require('../../methods');

router.get('/',(req,res,next)=>{
    res.json({Sucess:true});
})

router.post('/addCourse',(req,res,next)=>{
    methods.course.addCourse(req.body)
    .then(re=>{
        res.send(re);
    })
    .catch(er=>{
        res.json({Error : er});
    })
})

module.exports = router;