'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('Department', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    name: {type:   DataTypes.ENUM,
    values: ['Computer Science', 'Electrical & Electronics', 'Electronics & Communication','Mechanical','Civil','Industrial']
    }
  }, {});
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};