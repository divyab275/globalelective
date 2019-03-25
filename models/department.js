'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('Department', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    name: {type:   Sequelize.ENUM,
    values: ['CSE', 'EEE', 'ECE','ME','CE','IND']
    }
  }, {});
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};