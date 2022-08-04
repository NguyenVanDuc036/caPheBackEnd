const { Op } = require('sequelize');
const {Tables} = require('../models');
var _ = require('lodash');


const createTables = async (req, res) => {
    

    const {name, status , numberOfSeat , area} = req.body;

    try {

        const newTables = await Tables.create({
            name, status , numberOfSeat , area
        });
        res.status(201).send(newTables)
    } catch (error) {
        res.status(500).send(error)
    }
    
}





const getAllTables = async (req, res) => {
    const {name} = req.query;

    try {
        if(name){
            const TablesList = await Tables.findAll({
                where : {
                    name : {
                        [Op.like] : `%${name}%`
                    }
                },
            });
            res.status(200).send(TablesList);
        }else{
            const TablesList = await Tables.findAll();
            let TablesListGroup = _.groupBy(TablesList,"area")

            const array = Object.values(TablesListGroup);
            res.status(200).send(array);
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



const updateTables = async (req , res) => {
    const {id} = req.params;
    const {name, status , numberOfSeat , area} = req.body;

    try {
        const detailTables = await Tables.findOne({
            where : {
                id
            }
        })
        detailTables.name = name;
        detailTables.status = status;
        detailTables.numberOfSeat = numberOfSeat;
        detailTables.area = area;


        await detailTables.save();
        res.status(200).send(detailTables)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTable = async (req, res) => {
    const {id} = req.params;
    try {
        await Tables.destroy({
            where : {
                id
            }
        })
        res.status(200).send('Xóa thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}
    


const getDetailTables = async (req , res) => {
    
    const {id} = req.params;
    try {
        const detailTables = await Tables.findOne({
            where : {
                id
            }
        })
        res.status(200).send(detailTables);
    } catch (error) {
        res.status(500).send(error)
    }
}

const changeStatus = async (req , res) => {
    
    const {id} = req.params;
    try {
        const detailTables = await Tables.findOne({
            where : {
                id
            }
        })

        if(detailTables.status == 'Trống' ){
            detailTables.status ='Đang bận'
            await detailTables.save();
            res.status(200).send(detailTables);
        }else if(detailTables.status == 'Đang bận' ){
            detailTables.status ='Trống'
            await detailTables.save();
            res.status(200).send(detailTables);
        }else if(detailTables.status == 'Đang phục vụ'){
            res.status(500).send('Bàn đang phục vụ không thể đổi trạng thái');
        }
       
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    createTables,
    getAllTables,
    updateTables,
    deleteTable,
    getDetailTables,
    changeStatus
}
