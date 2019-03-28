var express = require('express');
var router = express.Router();
var models = require('../../models');
 

router.get('/', function(req, res, next) {
 res.send("Hello")
});
 
 

// router.post('/addStudent', function(req, res, next) {
//  	models.Student.create(req.body).then(result=>{
//  		res.json(result)
//  	})
//  	.catch(err=>{
//  		res.json(err)
//  	})
// });
 
 

// router.put('/:id', function(req, res, next) {
 
// });
 
 

// router.delete('/:id', function(req, res, next) {
 
// });
 
module.exports = router;