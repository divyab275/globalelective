const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const allotmentMethods = {};
const Op = Sequelize.Op;

allotmentMethods.allot = function(){
    return new Promise((resolve, reject) => {
        models.Student.findAll({
            order : [sequelize.fn('max', sequelize.col('cgpa')), 'DESC'],
        })
        .then(res=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err);
        })
      })
}