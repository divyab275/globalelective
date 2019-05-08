var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')
var methods=require('../methods')
var models=require('../models')

router.get('/getAll',(req,res,next) => {
    models.Event.findAll()
    .then(re => {
        res.json(re)
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router