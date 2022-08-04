const express = require('express')
const path = require('path')
const app = express();
var cors = require('cors')
const {rootRouter} = require('./routers')
const {sequelize} = require('./models')

// Cái ứng dụng sử dụng kiểu JSON
app.use(express.json())

//
app.use(cors())

// Cài đặt static file
const publicPathDirectory = path.join(__dirname, "./public") // __dirname là thư mục hiện tại
app.use("/public" , express.static(publicPathDirectory)); // Thêm /public



// Dùng routers
app.use('/api/v1', rootRouter)

const port =4000;
// Lắng nghe sự kiện kết nối
app.listen(port, async ()=>{
    console.log(`App listening on http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log('success');
    } catch (error) {
        console.log(error);
    }
})
