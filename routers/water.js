const express = require('express');
const {createWaters ,getAllWatersFillter,updateWatersConHang, updateWatersHetHang, getDetaiWatersByName,getAllWaters , getDetaiWaters ,deleteWaters ,updateWaters} = require('../controllers/water');


const WaterRouter = express.Router();

WaterRouter.post("/", createWaters  );
// WaterRouter.get("/", getAllWatersFillter);
WaterRouter.get("/", getAllWaters);
WaterRouter.put("/conhang/:id", updateWatersConHang);
WaterRouter.put("/:id", updateWaters);
WaterRouter.put("/hethang/:id", updateWatersHetHang);
WaterRouter.delete("/:id", deleteWaters);
WaterRouter.get("/:id", getDetaiWaters);
WaterRouter.post("/getbyname", getDetaiWatersByName);
    

module.exports = {
    WaterRouter,
}