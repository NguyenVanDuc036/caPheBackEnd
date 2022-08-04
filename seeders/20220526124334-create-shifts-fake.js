'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    

    await queryInterface.bulkInsert(
      "Shifts",
      [
        {
          name:"Ca 1",
          startTime:"07:00:00",
          finishTime:"12:00:00",
          day:"Thứ hai",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 2",
          startTime:"12:00:00",
          finishTime:"16:00:00",
          day:"Thứ hai",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 3",
          startTime:"16:00:00",
          finishTime:"22:00:00",
          day:"Thứ ba",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Ca 1",
          startTime:"07:00:00",
          finishTime:"12:00:00",
          day:"Thứ ba",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 2",
          startTime:"12:00:00",
          finishTime:"16:00:00",
          day:"Thứ ba",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 3",
          startTime:"16:00:00",
          finishTime:"22:00:00",
          day:"Thứ ba",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Ca 1",
          startTime:"07:00:00",
          finishTime:"12:00:00",
          day:"Thứ tư",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 2",
          startTime:"12:00:00",
          finishTime:"16:00:00",
          day:"Thứ tư",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 3",
          startTime:"16:00:00",
          finishTime:"22:00:00",
          day:"Thứ tư",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        }, {
          name:"Ca 1",
          startTime:"07:00:00",
          finishTime:"12:00:00",
          day:"Thứ năm",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 2",
          startTime:"12:00:00",
          finishTime:"16:00:00",
          day:"Thứ năm",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 3",
          startTime:"16:00:00",
          finishTime:"22:00:00",
          day:"Thứ năm",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        }, {
          name:"Ca 1",
          startTime:"07:00:00",
          finishTime:"12:00:00",
          day:"Thứ sáu",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 2",
          startTime:"12:00:00",
          finishTime:"16:00:00",
          day:"Thứ sáu",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 3",
          startTime:"16:00:00",
          finishTime:"22:00:00",
          day:"Thứ sáu",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        }, {
          name:"Ca 1",
          startTime:"07:00:00",
          finishTime:"12:00:00",
          day:"Thứ bảy",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 2",
          startTime:"12:00:00",
          finishTime:"16:00:00",
          day:"Thứ bảy",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 3",
          startTime:"16:00:00",
          finishTime:"22:00:00",
          day:"Thứ bảy",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        }, {
          name:"Ca 1",
          startTime:"07:00:00",
          finishTime:"12:00:00",
          day:"Chủ nhật",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 2",
          startTime:"12:00:00",
          finishTime:"16:00:00",
          day:"Chủ nhật",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Ca 3",
          startTime:"16:00:00",
          finishTime:"22:00:00",
          day:"chủ nhật",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
      
      ],
      {}
    );

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Shifts', null, {});
  }
};
