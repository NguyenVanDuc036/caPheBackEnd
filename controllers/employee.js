const { Op } = require('sequelize');
const {Employees} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const createEmployee = async (req, res) => {
    

    const {name , email , password , startedDate , position , numberPhone} = req.body;
    console.log(name , email , password , startedDate , position , numberPhone);
    try {
         // Tạo ra 1 chuỗi ngẫu nhiên    
         const salt = bcrypt.genSaltSync(10) // Tạo đồng bộ
         // Mã hóa chuỗi salt + password
         const hashPassword = bcrypt.hashSync(password, salt);

        
        
        const newEmployee = await Employees.create({
            name , email , password  , startedDate , position , numberPhone
        });
        res.status(201).send(newEmployee)
    } catch (error) {
        res.status(500).send(error)
    }
    
}


const login = async (req , res) => {
    const {email, password} = req.body;
    // Bước 1 : Tìm ra user đang đăng nhập dựa trên email
    const employee = await Employees.findOne({
        where : {
            email
        }
    })

    // Bước 2 : Kiểm tra mật khẩu có đúng hay không'

    if(employee){
        // const isAuthen = bcrypt.compareSync(password , employee.password)
        console.log(employee.password  , password);
        if(employee.password === password){
            const token = jwt.sign({ email : employee.email , position : employee.position },"duc-nguyen-36" , {expiresIn : 60 * 60})
            res.status(200).send({message : "Đăng nhập thành công !" , token : token , employee })
        }else{  
            res.status(500).send({message : "Đăng nhập thất bại !"})
        }
    }else{
        res.status(404).send({message : "Không tìm thấy email phù hợp !"})
    }
}









const getAllEmployee = async (req, res) => {
    const {name} = req.query;

    try {
        if(name){
            const employeeList = await Employees.findAll({
                where : {
                    name : {
                        [Op.like] : `%${name}%`
                    }
                },
            });
            res.status(200).send(employeeList);
        }else{
            const employeeList = await Employees.findAll();
            
            res.status(200).send(employeeList);
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



const getDetailEmployee = async (req , res) => {
    
    const {id} = req.params;
    try {
        const detailEmployee = await Employees.findOne({
            where : {
                id
            }
        })
        res.status(200).send(detailEmployee);
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateEmployee = async (req , res) => {
    const {id} = req.params;
    const {name , email , password , startedDate , position , numberPhone} = req.body;

    try {
        const detailEmployee = await Employees.findOne({
            where : {
                id
            }
        })
        detailEmployee.name = name;
        detailEmployee.email = email;
        detailEmployee.password = password;
        detailEmployee.startedDate = startedDate;
        detailEmployee.position = position;
        detailEmployee.numberPhone = numberPhone;

        await detailEmployee.save();
        res.status(200).send(detailEmployee)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteEmployee = async (req, res) => {
    const {id} = req.params;
    try {
        await Employees.destroy({
            where : {
                id
            }
        })
        res.status(200).send('Xóa thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}


const uploadAvatar = async (req , res) => {
    const {employee , file} = req;
    const employeeFound = await Employees.findOne({
        email : employee.email
    })
    
    const urlImg = `http://localhost:3000/${file.path}`;

    console.log({urlImg});
    employeeFound.avatar = urlImg;
    await employeeFound.save();
    res.send(employeeFound)
}
    


module.exports = {
    createEmployee,
    getAllEmployee,
    getDetailEmployee,
    updateEmployee,
    deleteEmployee,
    login,
    uploadAvatar
}
