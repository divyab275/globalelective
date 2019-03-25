'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('Student', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    regID: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  models.Student.belongsTo(models.Department,{foreignKey:'deptID'})
  models.Student.belongsTo(models.User,{foreignKey:'regID',targetKey:'userID'})
  models.Student.hasMany(models.Preference,{ foreignKey: 'studentID' })
  student.hasOne(models.Allotment,{foreignKey:'studentID'});
  };
  return student;
};