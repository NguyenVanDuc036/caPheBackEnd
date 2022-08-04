'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bills', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      createdTime: {
        type: Sequelize.TIME
      },
      totalMoney: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      employee_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Employees',
          key : 'id'
        }
      },
      table_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Tables',
          key : 'id'
        }
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
    await queryInterface.dropTable('Bills');
  }
};