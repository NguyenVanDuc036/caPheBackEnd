'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_shifts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Employees , Shifts}) {
      this.belongsTo(Employees , {foreignKey : 'employee_id'})
      this.belongsTo(Shifts , {foreignKey : 'shift_id'})
    }
  }
  employee_shifts.init({
    employee_id:{
      type : DataTypes.INTEGER,
      allowNull : false,
      primaryKey: true,
    },
    shift_id:{
      type : DataTypes.INTEGER,
      allowNull : false,
      primaryKey: true,
    }

  }, {
    sequelize,
    modelName: 'employee_shifts',
  });
  return employee_shifts;
};