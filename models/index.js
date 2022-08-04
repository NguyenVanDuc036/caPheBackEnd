'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; // Biến môi trường, không làm gì hết, env có giá tri là development
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


let sequelize;
if (config.use_env_variable) { // use_env_variable không tồn tại trong config
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs // file system  : đọc và ghi file
  .readdirSync(__dirname) // Đọc toàn bộ file trong thư mục
  .filter(file => { // Dùng để lọc ra tên file có dấu . , basename là khác với thư mục models , cắt chuỗi 3 ký tự cuối cùng phải là .js
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  }) // ==> lọc ra toàn bộ file js
  .forEach(file => { // Đường dẫn tới file station hiện tại
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes); // Gọi luôn hàm bên table, và truyền vào 2 tham số
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// => Export models một cách tự động mỗi lần chúng ta tạo 

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
