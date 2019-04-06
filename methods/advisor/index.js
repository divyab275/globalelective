const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const advisorMethods = {};
const Op = Sequelize.Op;

advisorMethods.addAdvisor = (info) => {
    console.log('inside adding advisor');
    return new Promise((resolve, reject) => {
      models.Advisor.create(info)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
  
  module.exports = advisorMethods;