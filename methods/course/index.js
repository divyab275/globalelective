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

  module.exports = courseMethods;