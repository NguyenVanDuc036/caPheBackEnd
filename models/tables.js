'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Bills}) {
      this.hasMany(Bills , {foreignKey : 'table_id' ,as : 't' });
    }
  }
  Tables.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    numberOfSeat: DataTypes.INTEGER,
    area: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tables',
  });
  return Tables;
};