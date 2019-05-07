const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');
const Sequelize = require('sequelize');
var { sequelize } = models;

const eventMethods = {};
const Op = Sequelize.Op;

eventMethods.setPreference  = function(){
    return new Promise((resolve,reject) => {
        models.Event.findAll({
            raw : true
        })
        .then(res => {
            if(res.length == 0){
                models.Event.create({flag : 1})
                .then(re => {
                    resolve(re)
                })
                .catch(er => {
                    reject(er)
                })
            }
            else{
                models.Event.update({flag : 1},{
                    where : {
                        flag : 0
                    }
                })
                .then(re => {
                    resolve(re)
                })
                .catch(er => {
                    resolve(er)
                })
            }
               
        })
        .catch(err => {
            reject(err)
        })
    })
}

eventMethods.unsetPreference = function(){
    return new Promise((resolve,reject) => {
        models.Event.findAll({
            raw : true
        })
        .then(res => {
            if(res.length == 0){
                models.Event.create({flag : 0})
                .then(re => {
                    resolve(re)
                })
                .catch(er => {
                    reject(er)
                })
            }
            else{
                models.Event.update({flag : 0},{
                    where : {
                        flag : 1
                    }
                })
                .then(re => {
                    resolve(re)
                })
                .catch(er => {
                    resolve(er)
                })
            }
               
        })
        .catch(err => {
            reject(err)
        })
    })
}


module.exports = eventMethods


