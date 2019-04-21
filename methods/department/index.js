const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const departmentMethods = {};
const Op = Sequelize.Op;

departmentMethods.getDepts = () => {
    console.log('inside get depts');
    return new Promise((resolve, reject) => {
      models.Department.findAll({attributes:['id','name']})
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  departmentMethods.getCoursesElligibleForDept = function(deptID) {
    return new Promise((resolve,reject) => {
      models.Course.findAll({
        raw : true,
        where : {
          deptID : {
            [Op.notIn]: deptID
          }   
        },
        attributes : ['id','name','courseID','name']
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
  
  module.exports = departmentMethods;