'use strict';
module.exports = (sequelize, DataTypes) => {
  const preference = sequelize.define('Preference', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    cid1: DataTypes.INTEGER,
    cid2: DataTypes.INTEGER,
    cid3: DataTypes.INTEGER,
    cid4: DataTypes.INTEGER,
    cid5: DataTypes.INTEGER,
    cid6: DataTypes.INTEGER,
    cid7: DataTypes.INTEGER,
    cid8: DataTypes.INTEGER,
    cid9: DataTypes.INTEGER,
    cid10: DataTypes.INTEGER

  }, {});
  preference.associate = function(models) {
    // associations can be defined here
    models.Preference.belongsTo(models.Course,{foreign_key:'cid1',target_key:'id'})
    models.Preference.belongsTo(models.Course,{foreign_key:'cid2',target_key:'id'})
    models.Preference.belongsTo(models.Course,{foreign_key:'cid3',target_key:'id'})
    models.Preference.belongsTo(models.Course,{foreign_key:'cid4',target_key:'id'})
    models.Preference.belongsTo(models.Course,{foreign_key:'cid5',target_key:'id'})
    models.Preference.belongsTo(models.Course,{foreign_key:'cid6',target_key:'id'})
    models.Preference.belongsTo(models.Course,{foreign_key:'cid7',target_key:'id'})
    models.Preference.belongsTo(models.Course,{foreign_key:'cid8',target_key:'id'})
    models.Preference.belongsTo(models.Course,{foreign_key:'cid9',target_key:'id'})
    models.Preference.belongsTo(models.Course,{foreign_key:'cid10',target_key:'id'})
    

  };
  return preference;
};