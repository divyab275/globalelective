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

  };
  return student;
};