const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const models = require("../../models");
const Promise = require("bluebird");
const key = require("../../config/api.json").API_SECRET;
const { sequelize } = require("../../models");
var authenticationMethods = {};

//Not a transaction doesnt roll back , even though added outputs error
authenticationMethods.registerAdvisor = function(info) {
  return new Promise(function(resolve, reject) {
    bcrypt.hash(info.password, saltRounds).then(hash=>{
      return sequelize
      .transaction(function(t) {
        var user = {}
       user.userID = info.userID
       user.name = info.name
       user.password = hash
       user.privilege = 2
      //  console.log(hash)
        return models.User
          .create(user, { transaction: t })
          .then(function(user) {
          // console.log(user)
           var advisor = {}
           advisor.advisorID = info.userID
           advisor.name = info.name
           advisor.deptID = info.deptID
            return models.Advisor
              .create(advisor, {
                transaction: t
              })
              .then(function(result) {
                // console.log("Successful")
                resolve({ success: true });
              })
              .catch(function(err) {
                reject({ success: "false1" });
              });
          })
          .catch(function(err) {
            reject({ success: err });
          });
      })
      .then(function(result) {
        console.log("SUCCESS")
        resolve({ success: true });
      })
      .catch(function(err) {
        reject({ success: "false3" });
      });
    })
    .catch(err=>{
      reject({success : "false4"});
    })
  });
};
authenticationMethods.registerAdmin = function(info) {
  return new Promise(function(resolve, reject) {
    bcrypt.hash(info.password, saltRounds).then(hash=>{
      return sequelize
      .transaction(function(t) {
        var user = {}
       user.userID = info.userID
       user.name = info.name
       user.password = hash
       user.privilege = 1
      //  console.log(hash)
        return models.User
          .create(user, { transaction: t })
          .then(function(user) {
          // console.log(user)
           
          })
          .catch(function(err) {
            reject({ success: err });
          });
      })
      .then(function(result) {
        console.log("SUCCESS")
        resolve({ success: true });
      })
      .catch(function(err) {
        reject({ success: "false3" });
      });
    })
    .catch(err=>{
      reject({success : "false4"});
    })
  });
};

authenticationMethods.registerStudent = function(info) {
  return new Promise(function(resolve, reject) {
    bcrypt.hash(info.password, saltRounds).then(hash=>{
      return sequelize
      .transaction(function(t) {
        var user = {}
       user.userID = info.regID
       user.name = info.name
       user.password = hash
       user.privilege = 3
       console.log(hash)
        return models.User
          .create(user, { transaction: t })
          .then(function(user) {
          // console.log(user)
           var student = {}
           student.regID = info.regID
           student.name = info.name
           student.deptID = info.deptID
           student.cgpa = info.cgpa
            return models.Student
              .create(student, {
                transaction: t
              })
              .then(function(result) {
                // console.log("Successful")
                resolve({ success: true });
              })
              .catch(function(err) {
                reject({ success: "false1" });
              });
          })
          .catch(function(err) {
            reject({ success: err });
          });
      })
      .then(function(result) {
        console.log("SUCCESS")
        resolve({ success: true });
      })
      .catch(function(err) {
        reject({ success: "false3" });
      });
    })
    .catch(err=>{
      reject({success : "false4"});
    })
  });
};

authenticationMethods.authenticateUser = function(userID, password) {
  return new Promise(function(resolve, reject) {
    models.User
      .findOne({
        where: {
          userID: userID
        }
      })
      .then(result => {
        if (result) {
          // console.log(result)
          bcrypt.compare(password, result.password, function(err, res) {
            if (res === true) {
              console.log("correct password-bcrypt");
              const token = jwt.sign(
                {
                  id: result.userID,
                  privilege: result.dataValues.privilege,
                  name: result.dataValues.name
                },
                key,
                { expiresIn: "1h" }
              );
              const privilege = result.dataValues.privilege;
              const user_id = result.dataValues.userID;
              var decoded = jwt.decode(token, { complete: true });
              console.log(user_id + " " + privilege);
              
              resolve({
                success: true,
                token: token,
                privilege: privilege,
                user_id: user_id
              });
            } else {
              console.log("wrong password-bcrypt");

              reject({ success: false, token: null });
            }
          });
        } else {
          reject(new Error());
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = authenticationMethods;