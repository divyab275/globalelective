'use strict';
module.exports = (sequelize, DataTypes) => {
  const preference = sequelize.define('Preference', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    cid1: DataTypes.STRING,
    cid2: DataTypes.STRING,
    cid3: DataTypes.STRING,
    cid4: DataTypes.STRING,
    cid5: DataTypes.STRING
  }, {});
  preference.associate = function(models) {
    // associations can be defined here
  models.Preference.hasMany(models.Course)

  };
  return advisor;
};