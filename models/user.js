'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    userID:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      name: DataTypes.STRING(45),
      password: DataTypes.STRING,
      privilege: DataTypes.ENUM("Admin","Advisor","Student")
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  

  };
  return user;
};