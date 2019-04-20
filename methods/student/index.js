const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const studentMethods = {};
const Op = Sequelize.Op;

studentMethods.getStudentID = function(userID){
    console.log("Inside fun")
    console.log(userID)
    return new Promise((resolve,reject)=>{
        models.Student.findOne({
            where :{
                regID : userID
            }
        })
        .then(res=>{
           resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    })
    
}

module.exports = studentMethods;