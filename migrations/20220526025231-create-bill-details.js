'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BillDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      totalMoney: {
        type: Sequelize.INTEGER
      },
      water_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 'waters',
          key : 'id'
        }
      },
      bill_id: {
        type: Sequelize.STRING,
        references : {
          model : 'Bills',
          key : 'id'
        }
      },
      decription: {
        type: Sequelize.STRING
      },status: {
        type: Sequelize.BOOLEAN
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BillDetails');
  }
};