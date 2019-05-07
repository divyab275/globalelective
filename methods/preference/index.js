const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
studentMethods = require('../student')
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


preferenceMethods.updatePreferences = function(studID,pref1,pref2,pref3){

}

preferenceMethods.getPreferences = function(){
  return new Promise((resolve,reject) => {
    models.Preference.findAll({
      group : ['studentID']
    })
    .then(res=>{
      resolve(res)
    })
    .catch(err=>{
      reject(err)
    })
  })
}

preferenceMethods.getStudentPreferences = function(studentID){
  return new Promise((resolve,reject) => {
      models.Preference.findAll()
      .then(res => {
        // console.log(res)
        var pref = {}
        var cids = []
        res.forEach(element => {
          if (!(element.dataValues.studentID in pref)){
            pref[element.dataValues.studentID] = [];
            // pref[element.dataValues.studentID].push(element.dataValues.courseID)
            pref[element.dataValues.studentID][element.dataValues.preferenceLevel - 1] = element.dataValues.courseID;
          }
          else
          pref[element.dataValues.studentID][element.dataValues.preferenceLevel - 1] = element.dataValues.courseID;
        });
        // var cids = [];
        // res.forEach(element => {
        //   cids[element.dataValues.preferenceLevel - 1] = element.dataValues.courseID;
        // });
        preferences = []  
        studentID.forEach(student => {
          // preferences[student] = pref[student]
          // console.log(student)
          var studObj = new Object();
          studObj[student] = pref[student]
          preferences.push(studObj)
          // console.log(pref[stude])
        });
        resolve(preferences)
      })
      .catch(err => {
        reject(err)
      })
  })
}

preferenceMethods.hasMarkedPreference = function(studentID){
  return new Promise((resolve,reject) => {
      studentMethods.getStudentID(studentID)
      .then(res => {
        studID = res.dataValues.id;
        models.Preference.findAll({
          raw : true,
          where : {
            studentID : studID
          }
        })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
      })
      .catch(err =>{
        reject(err)
      })
      
  })
}

module.exports = preferenceMethods