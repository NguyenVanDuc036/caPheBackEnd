
const jwt = require('jsonwebtoken');
const {Employees} = require('../../models/employees');


const authenticate =(req , res , next) => { //Xác thực người dùng đã đăng nhập chưa
    const token = req.header("token");

    try {
        const decode = jwt.verify(token , "duc-nguyen");
        if(decode){
            req.employee = decode;
            next();
        }else{
            res.status(404).send("Bạn đã đăng nhập!")
        }
    } catch (error) {
        // res.status(500).send(error);
        res.status(404).send("Bạn đã đăng nhập!")
    }
    
}

module.exports = {
    authenticate
}