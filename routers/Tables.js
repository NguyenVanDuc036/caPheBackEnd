const express = require('express');
const {createTables,
    getAllTables,
    updateTables,
    deleteTable,changeStatus,
    getDetailTables} = require('../controllers/tables');


const TablesRouter = express.Router();

TablesRouter.post("/", createTables  );
TablesRouter.get("/", getAllTables);
TablesRouter.put("/:id", updateTables);
TablesRouter.delete("/:id", deleteTable);
TablesRouter.get("/:id", getDetailTables);
TablesRouter.get("/status/:id", changeStatus);


module.exports = {
    TablesRouter,
}