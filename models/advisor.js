'use strict';
module.exports = (sequelize, DataTypes) => {
  const advisor = sequelize.define('Advisor', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    advisorID: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  advisor.associate = function(models) {
    // associations can be defined here
  advisor.belongsTo(models.Department,{foreignKey:'deptID'})
  advisor.belongsTo(models.User,{foreignKey:'advisorID',targetKey:'userID'})

  };
  return advisor;
};