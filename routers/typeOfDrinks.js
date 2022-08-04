const express = require('express');
const {createTypeOfDrink,updateTypeOfDrinks,deleteTypeOfDrink, getAllTypeOfDrinks} = require('../controllers/typeOfDrinks');


const TyOfDrinkRouter = express.Router();

TyOfDrinkRouter.post("/", createTypeOfDrink  );
TyOfDrinkRouter.get("/", getAllTypeOfDrinks);
TyOfDrinkRouter.put("/:id", updateTypeOfDrinks);
TyOfDrinkRouter.delete("/:id", deleteTypeOfDrink);
TyOfDrinkRouter.get("/:id", getAllTypeOfDrinks);


module.exports = {
    TyOfDrinkRouter,
}