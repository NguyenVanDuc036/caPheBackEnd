'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BillDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Bills,waters}) {
      this.belongsTo(Bills , {foreignKey : 'bill_id' , as :'BillDetails'}  )
      this.belongsTo(waters , {foreignKey : 'water_id',as :'WaterDetails'})
    }
  }
  BillDetails.init({
    amount: DataTypes.INTEGER,
    totalMoney: DataTypes.INTEGER,
    water_id: DataTypes.INTEGER,
    bill_id: DataTypes.STRING,
    decription: DataTypes.STRING,
    status : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'BillDetails',
  });
  return BillDetails;
};