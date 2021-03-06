const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const userMethods = {};
const Op = Sequelize.Op;
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
      // models.Student.create(info2)
      // .then((result) => {
      //     resolve(result);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     reject(err);
      //   });



    });
  };

  userMethods.changePassword = function(username,password)  {
    return new Promise((resolve,reject) => {
      models.User.findOne({
        where : {
          userID : username
        }
      })
      .then(user => {
        bcrypt.hash(password, saltRounds).then(hash => {
            user.update({
              password : hash
            }) 
            .then(r => {
              resolve(r)
            })
            .catch(e => {
              reject(e)
            })
        })
        .catch(er => {
          reject(er)
        })
    })
    .catch(err => {
      reject(err)
    })
  
    })
    
}

  
  module.exports = userMethods;