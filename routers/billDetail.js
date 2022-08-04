const express = require('express');
const {createBillDetails,
    getBillDetails,
    deleteBillDetails,
    getBillDetailByBill,
    changeStatus,
    topSixWater,
    proceeds,
    updateBillDetails} = require('../controllers/billDetails');


const BillDetailsRouter = express.Router();

BillDetailsRouter.post("/", createBillDetails );
BillDetailsRouter.post("/top", topSixWater );
BillDetailsRouter.post("/proceeds", proceeds );
BillDetailsRouter.get("/", getBillDetails );
BillDetailsRouter.get("/changestatus/:id", changeStatus );
BillDetailsRouter.get("/:id", getBillDetailByBill );
BillDetailsRouter.delete("/:id", deleteBillDetails);
BillDetailsRouter.put("/:id", updateBillDetails);

module.exports = {
    BillDetailsRouter,
}