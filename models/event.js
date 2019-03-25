'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('Event', {
  flag : DataTypes.INTEGER
  }, {});
  event.associate = function(models) {
    // associations can be defined here
  

  };
  return event;
};