const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;
// const methods = require('../../methods');
const studentMethods =  require('../../methods/student')
const preferenceMethods = require('../../methods/preference')
const courseMethods =  require('../../methods/course')
const allotmentMethods = {};
const Op = Sequelize.Op;

allotmentMethods.allot = function() {
    return new Promise((resolve,reject) => {
        models.Allotment.destroy({
            where : {},
            truncate : true
        })
        .then(res => {
            studentMethods.getAllStudentsDesc()
        .then(res2 => {
            //Students Arranged in Descending Order in res
            // console.log(res2)
            preferenceMethods.getStudentPreferences(res2)
            .then(res => {
                //[{studentid1: ['cid1','cid2']},{studentid2: ['cid1','cid2']},{studentid3: ['cid1','cid2']}] array returned
                //Students are sorted in cgpa desc
                courseMethods.getAllCourses()
                .then(re => {
                    //re is an object with key course id and value array[capacity,filled]
                    var course_list = re;
                    // console.log(res)
                    // console.log(course_list)
                    var allotment = []
                    res.forEach(studObj => {
                      
                       studentID = Object.keys(studObj)[0]
                       courses  =studObj[studentID]
                       if(!courses){
                           //student not specified preference
                           // Add such students to an array and finally allot them to any course that is not yet filled
                           console.log(studentID, "not specified any preference")
                       }
                       else{
                        //    console.log(studObj)
                        for(var i=0;i<courses.length;i++){
                            var course = courses[i];
                             if(course_list[course][1]<course_list[course][0]){
                                 course_list[course][1]++;
                                 var stud_allot={}
                                 stud_allot['studentID'] = studentID;
                                 stud_allot['courseID'] = course;
                                 allotment.push(stud_allot);
                                 console.log(stud_allot)
                                 break;
                             }
                        }
                       }
                       
                    //    console.log(allotment)
                     allotmentMethods.bulkCreate(allotment)
                     .then(res => {

                        resolve(res)
                     })
                     .catch(err => {
                        reject(err)
                     })
            
                       
                    });
                })
                .catch(er =>{
                    reject(er)
                })
                
            })
        })
        .catch(erro => {
            reject(erro)
        })
        })
        .catch(err => {
            
        })
        
    })
}

allotmentMethods.bulkCreate = function(allotments)  {
    return new Promise((resolve,reject)=>{
        models.Allotment.bulkCreate(allotments).then(() => { 
            return models.Allotment.findAll({
                raw : true
            });
          }).then(res => {
            resolve(res)
          }).catch(err => {
              reject(err);
          })
    })
}

allotmentMethods.getAllAllotments = function(){
    return new Promise((resolve,reject) => {
        models.Allotment.findAll({
            raw : true
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
    })
}

allotmentMethods.getAllotmentList = function(){
    return new Promise((resolve,reject) => {
        studentMethods.getAllStudentDetails()
        .then(res => {
            students = res
            courseMethods.getAllCourseDetails()
            .then(re => {
                courses = re
                allotmentMethods.getAllAllotments()
                .then(r => {
                    allot = []
                    r.forEach(allotment => {
                        var x = students[allotment.studentID];
                        x.push(courses[allotment.courseID][0])
                        x.push(courses[allotment.courseID][1])
                        allot.push(x)
                    })
                    resolve(allot)
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



module.exports = allotmentMethods