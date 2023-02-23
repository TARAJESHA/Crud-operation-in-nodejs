'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // user.hasMany(models.admin,{foreignKey:"adminId", as:"admin"})
      // user.hasOne(models.user,{foreignKey:"userId", as:"user"})
      user.hasMany(models.officer,{foreignKey:"officerId", as:"officer"})
      user.hasMany(models.hr,{foreignKey:"hrId", as:"hr"})
      user.hasMany(models.admin,{foreignKey:"adminId", as:"admin"})
    }
  }
  user.init({
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey:true
    // },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    DateOfBirth: DataTypes.DATE,
    patientEmailId: DataTypes.STRING,
    patient_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};