'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert(
      "Employees",
      [
        {
          name:"Nguyễn Văn Đức",
          email:"duc@gmail.com",
          password :"12345",
          startedDate : "2022/06/21",
          position : "phucVu",
          numberPhone:"03324222",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Nguyễn Văn Cao",
          email:"cao@gmail.com",
          password :"12345",
          startedDate : "2021/03/22",
          position : "quanLy",
          numberPhone:"03324222",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Nguyễn Văn Đông",
          email:"dong@gmail.com",
          password :"12345",
          startedDate : "2021/03/22",
          position : "phucVu",
          numberPhone:"0235436422",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Nguyễn Văn Đạt",
          email:"dat@gmail.com",
          password :"12345",
          startedDate : "2021/03/22",
          position : "phucVu",
          numberPhone:"02843845",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Nguyễn Triệu Vân",
          email:"van@gmail.com",
          password :"12345",
          startedDate : "2022/03/21",
          position : "nhanVien",
          numberPhone:"02843845",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Lý Bảo",
          email:"lybao@gmail.com",
          password :"12345",
          startedDate : "2022/02/21",
          position : "phucVu",
          numberPhone:"0234435",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        }, {
          name:"Ngô Đăng Khôi",
          email:"khoi@gmail.com",
          password :"12345",
          startedDate : "2022/02/21",
          position : "phaChe",
          numberPhone:"0234435",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
      
      
      ],
      {}
    );

  },

  async down (queryInterface, Sequelize) {


     await queryInterface.bulkDelete('Employees', null, {});
  }
};
