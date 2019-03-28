var express = require('express');
var router = express.Router();
var models = require('../../models/index');
const Promise = require("bluebird");
const saltRounds = 10;
const bcrypt = require("bcrypt");
const methods = require("../../methods/authentication");

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
    userID = req.body.userID;
    password = req.body.password;
    methods.authenticateUser(userID,password)
    .then(res=>{
        // console.log("Logged in")
        res.redirect('http://localhost:3000/')
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router