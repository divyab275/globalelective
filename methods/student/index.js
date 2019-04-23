const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const departmentMethods = require('../../methods/department') 
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

studentMethods.getAllStudentsDesc = function(){
    return new Promise((resolve,reject) =>{
        models.Student.findAll({
            order : [['cgpa','DESC']]
        })
        .then(res => {
            var students = []
            res.forEach(element => {
                students.push(element.dataValues.id)
            });
            resolve(students)
        })
        .catch(err => {
            reject(err)
        })
    })
}


studentMethods.allowedCourses = function(studentID){
    console.log(this)
    return new Promise(function(resolve,reject) {
        models.Student.findOne({
            raw : true,
            where : {
                regID : studentID
            },
            attributes : ['deptID']
        })
        .then(function(res){
            console.log(res)
            var deptID = res.deptID;
            // console.log(method)
            departmentMethods.getCoursesElligibleForDept(deptID)
            .then(re => {
                resolve(re)
            })
            .catch(er => {
                reject(er)
            })
            
        })
        .catch(err => {
            console.log(err)
        })
    })

    // return new Promise((resolve,reject) => {
    //     models.Student.findAll()
    //     .then(res => {
    //         resolve(['C01','C02',"C03"]);
    //     })
    //     .catch()

    // })
}

studentMethods.getAllStudentDetails = function(){
    return new Promise((resolve,reject)=>{
      models.Student.findAll({
        raw : true,
        attributes : ['id','regID','name']
      })
      .then(res => {
        var re = {}
        res.forEach(element => {
          var x = []
          x.push(element.regID)
          x.push(element.name)
          re[element.id] = x
        });
        resolve(re);
      })
      .catch(err => {
        reject(err);
      })
    })
  }
  

module.exports = studentMethods;