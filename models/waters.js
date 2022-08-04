'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class waters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({TypeOfDrinks,BillDetails}) {
      // define association here
      this.belongsTo(TypeOfDrinks , {foreignKey : 'typeOfDinkId'})
      this.hasMany(BillDetails , {foreignKey : 'water_id' , as :'WaterDetails'});
    }
  }
  waters.init({
    name: DataTypes.STRING,
    imgSrc: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size: DataTypes.STRING,
    typeOfDinkId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'waters',
  });
  return waters;
};