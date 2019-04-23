var express = require('express');
var router = express.Router();
var models = require('../models/index');
var methods = require('../methods')
 
router.get('/getAll',(req,res) => {
    console.log(methods)
    methods.allotment.getAllAllotments()
    .then(re => {
        res.json(re)
    })
    .catch(er => {
        res.send(er)
    })
})

router.get('/allot',(req,res) => {
    methods.allotment.allot()
    .then(re => {
        res.json(re)
    })
    .catch(er => {
        res.send(er)
    })
})

module.exports = router