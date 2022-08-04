// upload file
const multer = require("multer"); // Thư viện giúp upload hình ảnh lên file server
const mkdirp = require("mkdirp"); // Thư viện giúp tạo folder
const imageToBase64 = require("image-to-base64");
const fs = require("fs");
const Jimp = require("jimp");


const uploadImage = (type) => {
  // Tạo đường dẫn
  const made = mkdirp.sync(`./public/images/${type}`);
  
  // Định nghĩa storage
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`); // Set up chỗ cần lưu file
      console.log(file);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname); // Đặt lại tên cho file
    }, // Thêm date để không bị trùng tên file, dẫn đến việc bị ghi đè file ở file server
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const extensionImageList = [".png", ".JPG"];
      const extension = file.originalname.slice(-4);
      const check = extensionImageList.includes(extension);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("File  hợp lệ"));
      }
    },
  });

  return upload.single(`${type}`);
};



module.exports = {
  uploadImage,
};
