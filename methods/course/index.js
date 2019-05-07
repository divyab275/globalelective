const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const courseMethods = {};
const Op = Sequelize.Op;


courseMethods.addCourse = (info) => {
    info.filled = 0;
    return new Promise((resolve, reject) => {
      models.Course.create(info)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

courseMethods.getAllCourses = function(){
  return new Promise((resolve,reject)=>{
    models.Course.findAll({
      raw : true,
      attributes : ['id','capacity','filled']
    })
    .then(res => {
      var re = {}
      res.forEach(element => {
        var x = []
        x.push(element.capacity)
        x.push(element.filled)
        re[element.id] = x
      });
      resolve(re);
    })
    .catch(err => {
      reject(err);
    })
  })
}


courseMethods.getAllCourseDetails = function(){
  return new Promise((resolve,reject)=>{
    models.Course.findAll({
      raw : true,
      attributes : ['id','courseID','name']
    })
    .then(res => {
      var re = {}
      res.forEach(element => {
        var x = []
        x.push(element.courseID)
        x.push(element.name)
        re[element.id] = x
      });
      resolve(re);
    })
    .catch(err => {
      reject(err);
    })
  })
}

courseMethods.getCourses = function(){
  return new Promise((resolve,reject) => {
    models.Course.findAll({
      raw : true
    })
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}

courseMethods.getCourse = function(id){
  return new Promise((resolve,reject) => {
    models.Course.findOne({
      raw : true,
      where : {
        id : id
      },
      attributes : ['courseID','name']
    })
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}

courseMethods.deleteCourse = function(id){
  return new Promise((resolve,reject) => {
    models.Course.destroy({
      raw : true,
      where : {
        courseID : id
      }})
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}

  module.exports = courseMethods;