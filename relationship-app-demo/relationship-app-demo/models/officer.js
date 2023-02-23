'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class officer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // officer.hasMany(models.admin,{foreignKey:"adminId", as:"admin"})
      // officer.hasOne(models.user,{foreignKey:"userId", as:"user"})
      officer.hasMany(models.hr,{foreignKey:"hrId", as:"hr"})
      officer.hasMany(models.admin,{foreignKey:"adminId", as:"admin"})
      // officer.belongsTo(models.hr,{foreignKey:"hrId", as:"hr"})
    }
  }
  officer.init({
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey:true
    // },
   
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'officer',
  });
  return officer;
};