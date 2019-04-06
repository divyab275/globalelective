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
    userID = req.body.userID;
    password = req.body.password;
    // req.userID = userID;
    // req.
    methods.authenticateUser(userID,password)
    .then(result=>{
        console.log("Logged in")
        console.log(result.token)
        
        // req.token = result.token
        // res.redirect(301,'/private/advisordashboard',{token:result.token})
        // res.status(304).redirect('index',{token:result.token})
        res.send(304)
        res.render('index',{title:'Profile'})
        // Not redirecting
    })
    .catch(err=>{
       
        console.log(err)
        res.status(400).json({success : false})
    })
})

module.exports = router