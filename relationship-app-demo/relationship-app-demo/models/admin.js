'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // admin.hasMany(models.user,{foreignKey:"userId", as:"user"})
      // define association here
    }
  }
  admin.init({
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
    modelName: 'admin',
  });
  return admin;
};

