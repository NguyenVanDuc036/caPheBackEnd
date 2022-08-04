const express = require('express');
const { uploadAvatar, createEmployee, getAllEmployee, getDetailEmployee, updateEmployee, deleteEmployee, login } = require('../controllers/employee');
const { authenticate } = require('../middlewares/authen/authenticate');
const { authorize } = require('../middlewares/authen/authorize');
const { uploadImage } = require('../middlewares/upload/upload-image');


const EmployeeRouter = express.Router();

EmployeeRouter.post("/", authenticate, authorize(["phucVu"]) );



EmployeeRouter.post("/", createEmployee  );
EmployeeRouter.get("/", getAllEmployee);
EmployeeRouter.get("/:id", getDetailEmployee);
EmployeeRouter.put("/:id", updateEmployee);
EmployeeRouter.delete("/:id", deleteEmployee);
EmployeeRouter.post("/login", login);
EmployeeRouter.post("/upload-avatar", authenticate, authorize(["phucVu"]) , uploadImage("employee") , uploadAvatar);

module.exports = {
    EmployeeRouter,
}