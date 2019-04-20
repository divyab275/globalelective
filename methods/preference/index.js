const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const preferenceMethods = {};
const Op = Sequelize.Op;

 preferenceMethods.addStudentPreference = function(info){

    return new Promise((resolve,reject)=>{
        models.Preference.bulkCreate(info).then(() => { 
            return models.Preference.findAll();
          }).then(res => {
            resolve(res)
          }).catch(err => {
              reject(err);
          })
    })
    
}

module.exports = preferenceMethods