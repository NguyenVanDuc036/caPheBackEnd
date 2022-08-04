const { Op } = require('sequelize');
const {Shifts} = require('../models');


const createShift = async (req, res) => {
    

    const {name , startTime , finishTime} = req.body;
    try {
        const newShift = await Shifts.create({
            name , startTime , finishTime
        });
        res.status(201).send(newShift)
    } catch (error) {
        res.status(500).send(error)
    }
    
}



const getAllShirt = async (req, res) => {
    const {name} = req.query;

    try {
        if(name){
            const shiftList = await Shifts.findAll({
                where : {
                    name : {
                        [Op.like] : `%${name}%`
                    }
                },
            });
            res.status(200).send(shiftList);
        }else{
            const shiftList = await Shifts.findAll();
            res.status(200).send(shiftList);
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



const getDetailShift = async (req , res) => {
    
    const {id} = req.params;
    try {
        const detailShift = await Shifts.findOne({
            where : {
                id
            }
        })
        if(deleteShift){
            res.status(200).send(detailShift);
        }else{
            res.status(404).send("Id không tồn tại");
        }

        
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateShift = async (req , res) => {
    const {id} = req.params;
    const {name ,startTime , finishTime} = req.body;

    try {
        const detailShift = await Shifts.findOne({
            where : {
                id
            }
        })

        if(detailShift){
            detailShift.name = name;
            detailShift.startTime = startTime;
            detailShift.finishTime = finishTime;
            await detailShift.save();
        }else{

        }
            res.status(404).send("Id không tồn tại")
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteShift = async (req, res) => {
    const {id} = req.params;
    try {
        await Shifts.destroy({
            where : {
                id
            }
        })
        res.status(200).send('Xóa thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}

    


module.exports = {
    createShift,
    getAllShirt,
    getDetailShift,
    updateShift,
    deleteShift
}
