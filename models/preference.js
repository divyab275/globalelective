'use strict';
module.exports = (sequelize, DataTypes) => {
  const preference = sequelize.define('Preference', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      courseID : {
        type : DataTypes.INTEGER
      },
      preferenceLevel:{
        type : DataTypes.INTEGER
      }

  }, {});
  preference.associate = function(models) {
   preference.belongsTo(models.Course,{foreignKey:'courseID',targetKey:'id'})
  };
  return preference;
};