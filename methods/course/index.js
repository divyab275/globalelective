const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const courseMethods = {};
const Op = Sequelize.Op;


courseMethods.addCourse = (info) => {
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

  module.exports = courseMethods;