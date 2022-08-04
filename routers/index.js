const express = require('express');
const rootRouter = express.Router();
const {EmployeeRouter } = require('../routers/emloyee');
const { Employee_shiftRouter } = require('./employee_shift');
const { ShiftRouter } = require('./shift');
var cors = require('cors');
const { GoodsRouter } = require('./goods');
const { WaterRouter } = require('./water');
const { TyOfDrinkRouter } = require('./typeOfDrinks');
const { TablesRouter } = require('./Tables');
const { BillsRouter } = require('./bill');
const { BillDetailsRouter } = require('./billDetail');

rootRouter.use("/employees", EmployeeRouter);
rootRouter.use("/shifts", ShiftRouter);
rootRouter.use("/employee_shift", Employee_shiftRouter);
rootRouter.use("/goods", GoodsRouter);
rootRouter.use("/waters", WaterRouter);
rootRouter.use("/drinks", TyOfDrinkRouter);
rootRouter.use("/tables", TablesRouter);
rootRouter.use("/bills", BillsRouter);
rootRouter.use("/billsdetail", BillDetailsRouter);

rootRouter.use(cors());

module.exports = {
    rootRouter
}