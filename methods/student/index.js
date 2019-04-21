const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const methods = require('../../methods')
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

    return new Promise((resolve,reject) => {
        models.Student.findOne({
            raw : true,
            where : {
                regID : studentID
            },
            attributes : ['deptID']
        })
        .then(res => {
            console.log(res)
            var deptID = res.deptID;
            console.log(methods)
            methods.department.getCoursesElligibleForDept(deptID)
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


module.exports = studentMethods;