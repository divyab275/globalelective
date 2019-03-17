'use strict';
module.exports = (sequelize, DataTypes) => {
  const allotment = sequelize.define('Allotment', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    studentID:{
        type : DataTypes.STRING,
        references:{
            model : 'Student',
            key : 'id'
        }
    }
  }, {});
  allotment.associate = function(models) {
    // associations can be defined here
  models.Allotment.hasOne(models.Course,{foreignKey: 'courseID'})

  };
  return advisor;
};