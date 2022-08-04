const express = require('express');
const {createEmployee , getAllGoods , updateGoods , deleteGoods , getDetaiGoods} = require('../controllers/goods');


const GoodsRouter = express.Router();

GoodsRouter.post("/", createEmployee  );
GoodsRouter.get("/", getAllGoods);
GoodsRouter.put("/:id", updateGoods);
GoodsRouter.delete("/:id", deleteGoods);
GoodsRouter.get("/:id", getDetaiGoods);


module.exports = {
    GoodsRouter,
}