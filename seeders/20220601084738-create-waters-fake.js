'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "waters",
      [
        {
          name:"capuchino",
          imgSrc:"http://localhost:4000/public/images/waters/capuchino.jpg",
          price:"20000",
          size : "Size nhỏ",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"capuchino",
          imgSrc:"http://localhost:4000/public/images/waters/capuchino.jpg",
          price:"20000",
          size : "Size trung bình",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
         {
          name:"capuchino",
          imgSrc:"http://localhost:4000/public/images/waters/capuchino.jpg",
          price:"20000",
          size : "Size lớn",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Bạc xỉu",
          imgSrc:"http://localhost:4000/public/images/waters/bac-xiu.webp",
          price:"20000",
          size : "Size nhỏ",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Bạc xỉu",
          imgSrc:"http://localhost:4000/public/images/waters/bac-xiu.webp",
          price:"20000",
          size : "Size trung bình",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        }
        , {
          name:"Bạc xỉu",
          imgSrc:"http://localhost:4000/public/images/waters/bac-xiu.webp",
          price:"20000",
          size : "Size lớn",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Cà phê sữa",
          imgSrc:"http://localhost:4000/public/images/waters/ca-phe-sua.webp",
          price:"20000",
          size : "Size nhỏ",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Cà phê sữa",
          imgSrc:"http://localhost:4000/public/images/waters/ca-phe-sua.webp",
          price:"20000",
          size : "Size trung bình",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Cà phê sữa",
          imgSrc:"http://localhost:4000/public/images/waters/ca-phe-sua.webp",
          price:"20000",
          size : "Size lớn",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Capuchino",
          imgSrc:"http://localhost:4000/public/images/waters/capuchino.jpg",
          price:"20000",
          size : "Size nhỏ",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Capuchino",
          imgSrc:"http://localhost:4000/public/images/waters/capuchino.jpg",
          price:"20000",
          size : "Size trung bình",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Capuchino",
          imgSrc:"http://localhost:4000/public/images/waters/capuchino.jpg",
          price:"20000",
          size : "Size lớn",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Trà sữa trân châu",
          imgSrc:"http://localhost:4000/public/images/waters/tra-sua.jpg",
          price:"20000",
          size : "Size nhỏ",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name:"Trà sữa trân châu",
          imgSrc:"http://localhost:4000/public/images/waters/tra-sua.jpg",
          price:"20000",
          size : "Size trung bình",
          typeOfDinkId : "1",
          status :"Hết hàng",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name:"Trà sữa trân châu",
          imgSrc:"http://localhost:4000/public/images/waters/tra-sua.jpg",
          price:"20000",
          size : "Size lớn",
          typeOfDinkId : "1",
          status :"Hết hàng",
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

     await queryInterface.bulkDelete('waters', null, {});
  }
};
