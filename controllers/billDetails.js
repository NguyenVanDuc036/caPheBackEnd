const { Op } = require('sequelize');
const {BillDetails,sequelize} = require('../models');



const createBillDetails = async (req, res) => {
    
    const {billdetail} = req.body;
    try {

        const newBills = await BillDetails.bulkCreate(billdetail);
        res.status(201).send(newBills)
    } catch (error) {
        res.status(500).send(error)
    }
    console.log(billdetail);
    
}

const changeStatus= async (req, res) => { 
    const {id} = req.params;
    
    try {
        const detailBilss = await BillDetails.findOne({
            where : {
                id
            }
        })
    
        if(detailBilss.status){
            detailBilss.status = false;
        }else{
            detailBilss.status = true;
        }
        
        await detailBilss.save();
    
        res.status(200).send(detailBilss)
    } catch (error) {
        res.status(404).send('Not found')
    }

    
}


const getBillDetails = async (req, res) => {
    try {
        const TablesList = await BillDetails.findAll();
        res.status(200).send(TablesList)
    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteBillDetails = async (req, res) => {
    const {id} = req.params;
    try {
        await BillDetails.destroy({
            where : {
                id
            }
        })
        res.status(200).send('Xóa thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}


const updateBillDetails = async (req , res) => {
    const {id} = req.params;
    const {amount , totalMoney, water_id , decription} = req.body;

    try {
        const detailBilss = await BillDetails.findOne({
            where : {
                id
            }
        })
        detailBilss.amount = amount;
        detailBilss.totalMoney = totalMoney;
        detailBilss.water_id = water_id;
        detailBilss.decription = decription;


        await detailBilss.save();
        res.status(200).send(detailBilss)
    } catch (error) {
        res.status(500).send(error)
    }
}


const getBillDetailByBill = async (req , res) => {
    
    const {id} = req.params;
    try {
        const detailBills = await BillDetails.findAll({
            where : {
                bill_id : id
            }
        })
        res.status(200).send(detailBills);
    } catch (error) {
        res.status(500).send(error)
    }
}
const topSixWater = async (req , res) => {
    const {month} = req.body;
    console.log({month});
    try {
        const [result] = await sequelize.query(`
            select  waters.name, sum(amount) as amount , sum(billdetails.totalMoney) as totalMoney,waters.imgSrc , billdetails.createdAt
            from billdetails inner join waters on billdetails.water_id = waters.id
            where billdetails.createdAt like '%${month}%'
            group by waters.name
            order by amount DESC
            limit 6
        `)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
    
}


const proceeds = async (req , res) => {
    const {week} = req.body;

    try {
        const [result] = await sequelize.query(`
                select sum(totalMoney) as totalMoney,dayofweek(createdAt) as day
                from billdetails
                where weekofyear(createdAt) = ${Number(week)}
                group by dayofweek(createdAt)
        `)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
    
}


module.exports = {
    createBillDetails,
    getBillDetails,
    deleteBillDetails,
    updateBillDetails,
    getBillDetailByBill,
    changeStatus,
    topSixWater,
    proceeds

}
