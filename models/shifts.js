'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shifts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({employee_shifts}) {
      this.hasMany(employee_shifts , {foreignKey : 'shift_id' });
    }
  }
  Shifts.init({
    name: DataTypes.STRING,
    startTime: DataTypes.TIME,
    finishTime: DataTypes.TIME,
    day: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shifts',
  });
  return Shifts;
};