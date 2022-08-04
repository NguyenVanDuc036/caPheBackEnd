const { Op } = require('sequelize');
const {employee_shifts , Employees , Shifts , sequelize} = require('../models');


const createEmployee_shift = async (req, res) => {

    

    const {employee_id , shift_id } = req.body;
    const detailEmployee = await Employees.findOne({
        where : {
            id :  employee_id
        }
    })
    const detailShifts = await Shifts.findOne({
        where : {
            id :  shift_id
        }
    })
    const detailEmployee_Shift = await employee_shifts.findOne({
        where : {
            employee_id,
            shift_id
        }
    })

    if(detailEmployee_Shift){
        res.status(500).send("Ca này của nhân viên đã tồn tại")
    }else if(!detailEmployee && detailShifts){
        res.status(404).send("Nhân viên không tồn tại")
    }else if(detailEmployee && !detailShifts){
        res.status(404).send("Ca làm việc không tồn tại")
    }else if(!detailEmployee && !detailShifts){
        res.status(404).send("Ca làm việc và nhân viên không tồn tại")
    }else{
        try {
            const newEmployee_shift = await employee_shifts.create({
                employee_id , shift_id
            });
            res.status(201).send(newEmployee_shift)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    


    
    
}



const getAllEmployee_shift = async (req, res) => {

    try {
        const shiftList = await Shifts.findAll();
        res.status(200).send(shiftList);
    } catch (error) {
        res.status(500).send(error);
    }          

}

const deleteEmployee_Shift = async (req, res) => {
    const {id} = req.params;
    try {
        await employee_shifts.destroy({
            where : {
                id
            }
        })
        res.status(200).send('Xóa ca thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}


const updateEmployee_Shift = async (req , res) => {
    const {id} = req.params;
    const {employee_id , shift_id } = req.body;

    try {
        const detailEmployee_Shift = await employee_shifts.findOne({
            where : {
                id
            }
        })
        detailEmployee_Shift.employee_id = employee_id;
        detailEmployee_Shift.shift_id = shift_id;

        await detailEmployee_Shift.save();
        res.status(200).send(detailEmployee_Shift)
    } catch (error) {
        res.status(500).send(error)
    }
}




const getAllEmployeeInAShift = async (req, res) => {
    const {id} = req.params;

    try {
        const detailShifts = await Shifts.findOne({
            where : {
                id
            }
        })

        if(detailShifts){
            const [result] = await sequelize.query(`
                SELECT employees.*
                FROM employee_shifts inner join employees on employee_shifts.employee_id = employees.id
                where employee_shifts.shift_id = ${id}
            `)
            res.status(200).send(result)
        }else{
            res.status(404).send("Ca làm việc không tồn tại")
        }
    } catch (error) {
        res.status(500).send(error)
    }         

}
const getAllShiftOfAEmployee = async (req, res) => {
    const {id} = req.params;

    try {
        const detailEmployee = await Employees.findOne({
            where : {
                id
            }
        })

        if(detailEmployee){
            const [result] = await sequelize.query(`
                select shifts.*
                from employee_shifts inner join shifts on employee_shifts.shift_id = shifts.id
                where  employee_shifts.employee_id = ${id}
            `)
            res.status(200).send(result)
        }else{
            res.status(404).send("Ca làm việc không tồn tại")
        }
    } catch (error) {
        res.status(500).send(error)
    }         

}
    

module.exports = {
    createEmployee_shift,
    getAllEmployee_shift,
    deleteEmployee_Shift,
    updateEmployee_Shift,
    getAllEmployeeInAShift,
    getAllShiftOfAEmployee
}
