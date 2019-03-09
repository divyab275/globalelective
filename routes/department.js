var express = require('express');
var router = express.Router();
var models = require('../models/index');
 

router.get('/', function(req, res, next) {
 res.send("Hello")
});
 
 

router.post('/addDept', function(req, res, next) {
 	models.Department.create(req.body).then(result=>{
 		res.json(result)
 	})
 	.catch(err=>{
 		res.send("error")
 	})
});
 
 

router.put('/:id', function(req, res, next) {
 
});
 
 

router.delete('/:id', function(req, res, next) {
 
});
 
module.exports = router;