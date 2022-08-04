const express = require('express');
const {finishBill,getAllBillTakeAway,createBills,getBills,Billpayment,getAllBill ,deleteBills ,getAllDetailBill,getBillByTableId,getAllDetailBills} = require('../controllers/bill');



const BillsRouter = express.Router();

BillsRouter.post("/",createBills );
BillsRouter.post("/bytableid", getBillByTableId);
BillsRouter.get("/", getAllBill);
BillsRouter.get("/detail", getAllDetailBill);
BillsRouter.get("/takeaway", getAllBillTakeAway);
BillsRouter.get("/finish/:id", finishBill);
BillsRouter.get("/billpayment/:id", Billpayment);
BillsRouter.get("/details", getAllDetailBills);
BillsRouter.delete("/:id", deleteBills);


module.exports = {
    BillsRouter,
}