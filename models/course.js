'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('Course', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    courseID: DataTypes.STRING,
    name: DataTypes.STRING,
    capacity:DataTypes.INTEGER,
    filled:DataTypes.INTEGER
    
  }, {});
  course.associate = function(models) {
    // associations can be defined here
  models.Course.belongsTo(models.Department,{foreignKey:'deptID'})

  };
  return course;
};