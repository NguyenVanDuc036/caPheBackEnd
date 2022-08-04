const { Op } = require('sequelize');
const {TypeOfDrinks} = require('../models');



const createTypeOfDrink = async (req, res) => {
    

    const {name } = req.body;

    try {

        const newTypeOfDrinks = await TypeOfDrinks.create({
            name 
        });
        res.status(201).send(newTypeOfDrinks)
    } catch (error) {
        res.status(500).send(error)
    }
    
}





const getAllTypeOfDrinks = async (req, res) => {
    const {name} = req.query;

    try {
        if(name){
            const TypeOfDrinksList = await TypeOfDrinks.findAll({
                where : {
                    name : {
                        [Op.like] : `%${name}%`
                    }
                },
            });
            res.status(200).send(TypeOfDrinksList);
        }else{
            const TypeOfDrinksList = await TypeOfDrinks.findAll();
            res.status(200).send(TypeOfDrinksList);
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



const updateTypeOfDrinks = async (req , res) => {
    const {id} = req.params;
    const {name } = req.body;

    try {
        const detailTypeOfDrinks = await TypeOfDrinks.findOne({
            where : {
                id
            }
        })
        detailTypeOfDrinks.name = name;


        await detailTypeOfDrinks.save();
        res.status(200).send(detailTypeOfDrinks)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTypeOfDrink = async (req, res) => {
    const {id} = req.params;
    try {
        await TypeOfDrinks.destroy({
            where : {
                id
            }
        })
        res.status(200).send('Xóa thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}
    


const getDetaiTypeOfDrinks = async (req , res) => {
    
    const {id} = req.params;
    try {
        const detailTypeOfDrinks = await TypeOfDrinks.findOne({
            where : {
                id
            }
        })
        res.status(200).send(detailTypeOfDrinks);
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    createTypeOfDrink,
    getAllTypeOfDrinks,
    updateTypeOfDrinks,
    deleteTypeOfDrink,
}
