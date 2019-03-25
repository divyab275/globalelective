'use strict';
module.exports = (sequelize, DataTypes) => {
  const allotment = sequelize.define('Allotment', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      }, 
    courseID:{
        type : DataTypes.INTEGER
    }
  }, {});
  allotment.associate = function(models) {
    // associations can be defined here
  models.Allotment.belongsTo(models.Course,{foreignKey: 'courseID',targetKey:'id'})

  };
  return allotment;
};