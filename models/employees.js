'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({employee_shifts , Bills}) {
      this.hasMany(employee_shifts , {foreignKey : 'employee_id' });
      this.hasMany(Bills , {foreignKey : 'employee_id', as :'t' });
    }
  }
  Employees.init({
    name:{
      type : DataTypes.STRING,
      allowNull : false
    },
    email:{
      type : DataTypes.STRING,
      allowNull : false
    },
    password:{
      type : DataTypes.STRING,
      allowNull : false
    },
    startedDate:{
      type : DataTypes.DATE,
      allowNull : false
    },
    position:{
      type : DataTypes.STRING,
      allowNull : false
    },
    numberPhone:{
      type : DataTypes.INTEGER(11),
      allowNull : false
    },
    avatar:{
      type : DataTypes.STRING,
      allowNull : true
    },
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};