'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeOfDrinks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({waters}) {
      this.hasMany(waters , {foreignKey : 'typeOfDinkId' });
      
    }
  }
  TypeOfDrinks.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TypeOfDrinks',
  });
  return TypeOfDrinks;
};