var express = require('express');
var router = express.Router();
var models = require('../models');
const Promise = require("bluebird");
const saltRounds = 10;
const bcrypt = require("bcrypt");
const methods = require("../methods/authentication");

router.get('/',(req,res)=>{
    res.json({'api':"/register"})
})

router.post('/', function(req, res, next) {
    // console.log(req.body)
    methods.registerAdvisor(req.body)
    .then(res=>{
        res.json({"Success" : true})
    })
    .catch(err=>{
        res.json({"Error" : err})
    })
});

router.post('/login',(req,res,next)=>{
    console.log("Inside post /login")
    console.log(req.body)
    userID = req.body.userID;
    password = req.body.password;
    // req.userID = userID;
    // req.
    methods.authenticateUser(userID,password)
    .then(result=>{
        console.log("Logged in")
        console.log(result.token)
        req.token = result.token
        req.session.token = result.token
        req.session.privilege = result.privilege
        console.log(result.privilege)
        if(result.privilege == 'Advisor')
            res.redirect('/private/advisordashboard')
        else if(result.privilege == "Student")
            res.redirect('/profile')
        
        
    })
    .catch(err=>{
       
        console.log(err)
        res.status(400).json({success : false})
    })
})

module.exports = router