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
  
  module.exports = departmentMethods;