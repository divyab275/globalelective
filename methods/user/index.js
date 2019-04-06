const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const userMethods = {};
const Op = Sequelize.Op;


userMethods.addUser = (info) => {
    console.log('inside adding user');
    return new Promise((resolve, reject) => {
      models.User.create(info)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  
  module.exports = userMethods;