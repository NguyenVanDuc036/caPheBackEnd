const { Op } = require('sequelize');
const {Goods} = require('../models');



const createEmployee = async (req, res) => {
    

    const {name , srcImg , status} = req.body;

    try {

        const newGoods = await Goods.create({
            name , srcImg , status
        });
        res.status(201).send(newGoods)
    } catch (error) {
        res.status(500).send(error)
    }
    
}





const getAllGoods = async (req, res) => {
    const {name} = req.query;

    try {
        if(name){
            const GoodsList = await Goods.findAll({
                where : {
                    name : {
                        [Op.like] : `%${name}%`
                    }
                },
            });
            res.status(200).send(GoodsList);
        }else{
            const GoodsList = await Goods.findAll();
            res.status(200).send(GoodsList);
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



const updateGoods = async (req , res) => {
    const {id} = req.params;
    const {name , srcImg, status} = req.body;

    try {
        const detailGoods = await Goods.findOne({
            where : {
                id
            }
        })
        detailGoods.name = name;
        detailGoods.srcImg = srcImg;
        detailGoods.status = status;


        await detailGoods.save();
        res.status(200).send(detailGoods)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteGoods = async (req, res) => {
    const {id} = req.params;
    try {
        await Goods.destroy({
            where : {
                id
            }
        })
        res.status(200).send('Xóa thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}
    


const getDetaiGoods = async (req , res) => {
    
    const {id} = req.params;
    try {
        const detailGoods = await Goods.findOne({
            where : {
                id
            }
        })
        res.status(200).send(detailGoods);
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    createEmployee,
    getAllGoods,
    updateGoods,
    deleteGoods,
    getDetaiGoods
}
