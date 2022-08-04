const express = require('express');
const { createShift,getAllShirt,getDetailShift,updateShift,deleteShift } = require('../controllers/shift');



const ShiftRouter = express.Router();

ShiftRouter.post("/", createShift  );
ShiftRouter.get("/", getAllShirt);
ShiftRouter.get("/:id", getDetailShift);
ShiftRouter.put("/:id", updateShift);
ShiftRouter.delete("/:id", deleteShift);


module.exports = {
    ShiftRouter,
}