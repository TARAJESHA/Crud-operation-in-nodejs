'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      hr.hasMany(models.admin,{foreignKey:"adminId", as:"admin"})
      // hr.hasOne(models.user,{foreignKey:"userId", as:"user"})

    }
  }
  hr.init({
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
    modelName: 'hr',
  });
  return hr;
};