'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tables,Employees,BillDetails}) {
      this.belongsTo(Tables , {foreignKey : 'table_id' , as : 't'}),
      this.belongsTo(Employees , {foreignKey : 'employee_id', as :'e'}),
      this.hasMany(BillDetails , {foreignKey : 'bill_id' ,  as :'BillDetails' });
    }
  }
  Bills.init({
    createdTime: DataTypes.TIME,
    totalMoney: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    employee_id: DataTypes.INTEGER,
    table_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bills',
  });
  return Bills;
};