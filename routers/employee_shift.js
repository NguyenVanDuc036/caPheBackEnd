const express = require('express');
const { createEmployee_shift,getAllEmployeeInAShift, getAllEmployee_shift ,deleteEmployee_Shift ,updateEmployee_Shift, getAllShiftOfAEmployee } = require('../controllers/employee_shift');


const Employee_shiftRouter = express.Router();

Employee_shiftRouter.post("/", createEmployee_shift);
Employee_shiftRouter.get("/",getAllEmployee_shift );
Employee_shiftRouter.put("/:id",updateEmployee_Shift );
Employee_shiftRouter.delete("/:id",deleteEmployee_Shift );

Employee_shiftRouter.get("/getAllEmployeeInAShift/:id",getAllEmployeeInAShift );
Employee_shiftRouter.get("/getAllShiftOfAEmployee/:id",getAllShiftOfAEmployee );

module.exports = {
    Employee_shiftRouter,
}