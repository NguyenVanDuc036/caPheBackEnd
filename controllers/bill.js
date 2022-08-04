const { Op } = require('sequelize');
const {Bills , BillDetails ,Tables, sequelize} = require('../models');

var _ = require('lodash');


const createBills = async (req, res) => {
    
    const {billdetail,id, createdTime , totalMoney , status , employee_id ,table_id} = req.body;

   

    const billCheck = await Bills.findOne({
        where : {
            id
        }
    })

    if(billCheck){

        try {

            const billDetail = await Bills.findOne({
                where : {
                    id
                }
            })

            if(table_id !=null ){
                const tableDetail = await Tables.findOne({
                    where : {
                        id : billDetail.table_id
                    }
                })
        
                tableDetail.status="Trống";
                await tableDetail.save();
            }
            
            
            await BillDetails.destroy({
                where : {
                    bill_id : id
                }
            })
    
            await Bills.destroy({
                where : {
                    id : id
                }
            })

        } catch (error) {
        }


        if(table_id !=null ){
            const tableDetail = await Tables.findOne({
                where : {
                    id : billCheck.table_id
                }
            })
    
            tableDetail.status="Trống";
            await tableDetail.save();
        }

       

        try {

            const newBills = await Bills.create({
                id ,createdTime , totalMoney , status , employee_id ,table_id
            });
    
            const newBillsDetail = await BillDetails.bulkCreate(billdetail);
    
            if(table_id !=null ){
                const detailTables = await Tables.findOne({
                    where : {
                        id : table_id
                    }
                })
                detailTables.status = 'Đang phục vụ';
                await detailTables.save();
            }
            
            
            res.status(201).send(newBills)
        } catch (error) {
            res.status(500).send(error)
        }

    }else{
        try {
            console.log({billdetail,id, createdTime , totalMoney , status , employee_id ,table_id});
            const newBills = await Bills.create({
                id ,createdTime , totalMoney , status , employee_id ,table_id
            });
    
            const newBillsDetail = await BillDetails.bulkCreate(billdetail);
    
            

            if(table_id !=null ){
                const detailTables = await Tables.findOne({
                    where : {
                        id : table_id
                    }
                })
                detailTables.status = 'Đang phục vụ';
                await detailTables.save();
            }
            
            
            res.status(201).send(newBills)
        } catch (error) {
            res.status(500).send(error)
        }
    }


  
}

const getAllBill = async (req, res) => {
    try {
        
        const TablesList = await Bills.findAll({
            include : [
                {
                    model : BillDetails,
                    as  : "BillDetails",
                },
            ]

        });
        res.status(200).send(TablesList)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllDetailBill = async (req, res) => {
    try {
        const [result] = await sequelize.query(`
            select tables.area , bills.id , tables.name ,tables.numberOfSeat, bills.totalMoney 
            from bills inner join tables on bills.table_id = tables.id inner join employees on bills.employee_id = employees.id
        `)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
    
}

const getAllDetailBills= async (req, res) => {
    try {
        const [result] = await sequelize.query(`
        select  waters.name,tables.name as ban , billdetails.amount, waters.size, billdetails.decription, billdetails.status , bills.id as id, tables.area , bills.totalMoney as total,tables.numberOfSeat,billdetails.totalMoney,  bills.createdAt , billdetails.amount , billdetails.id as BillDetailId , bills.status as statusBill , waters.imgSrc , waters.price, tables.id as tableId ,waters.id as waterId
        from bills inner join tables on bills.table_id = tables.id  inner join billdetails on billdetails.bill_id = bills.id inner join waters on waters.id = billdetails.water_id 
        `  )
        
        let billGroup = _.groupBy(result,"id")
        const array = Object.values(billGroup);
        res.status(200).send(array);
    } catch (error) {
        res.status(500).send(error)
    }
    
}


const getAllBillTakeAway= async (req, res) => {
    try {
        const [result] = await sequelize.query(`
        select  waters.name , billdetails.amount, waters.size, billdetails.decription, billdetails.status , bills.id as id , bills.totalMoney as total,billdetails.totalMoney,  bills.createdAt , billdetails.amount , billdetails.id as BillDetailId , bills.status as statusBill , waters.imgSrc , waters.price ,waters.id as waterId
        from bills inner join billdetails on billdetails.bill_id = bills.id inner join waters on waters.id = billdetails.water_id
        where bills.status = 3 or bills.status = 4;
        `  )
        
        let billGroup = _.groupBy(result,"id")
        const array = Object.values(billGroup);
        res.status(200).send(array);
    } catch (error) {
        res.status(500).send(error)
    }
    
}

const finishBill= async (req, res) => { 
    const {id} = req.params

    try {
         const billDetail = await Bills.findOne({
            where : {
                id
            }
        })

        if(billDetail.table_id !=null){
            billDetail.status = 1;
            await billDetail.save()
            res.status(200).send(billDetail)
        }else{
            billDetail.status = 4;
            await billDetail.save()
            res.status(200).send(billDetail)
        }

    

    } catch (error) {
        res.status(404).send('Không tìm thấy bill')
    }
}

const Billpayment= async (req, res) => { 
    const {id} = req.params

    try {

        // Thay đổi trạng thái cho bill là đã thanh toán
         const billDetail = await Bills.findOne({
            where : {
                id
            }
        })

        if(billDetail.table_id != null){
            billDetail.status = 2;
            await billDetail.save()
    
            // Cập nhật lại ghế là đang trống
    
            const tableDetail = await Tables.findOne({
                where : {
                    id : billDetail.table_id
                }
            })
            tableDetail.status="Trống";
            await tableDetail.save();
            res.status(200).send(billDetail)
        }else{
            billDetail.status = 5;
            await billDetail.save();
            res.status(200).send(billDetail)
        }
       

    } catch (error) {
        res.status(404).send('Không tìm thấy bill')
    }
}



const getBillByTableId = async (req, res) => {

    const {id} = req.body
   
    if(id!=''){
        try {
            const [result] = await sequelize.query(`
                select tables.area , bills.id , tables.name ,tables.numberOfSeat, bills.totalMoney 
                from bills inner join tables on 
                bills.table_id = tables.id inner join employees 
                on bills.employee_id = employees.id
                where tables.id = ${id}
                `)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }else{
        try {
            const [result] = await sequelize.query(`
                select tables.area , bills.id , tables.name ,tables.numberOfSeat, bills.totalMoney 
                from bills inner join tables on bills.table_id = tables.id inner join employees on bills.employee_id = employees.id
            `)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    
}

const getBills = async (req, res) => {
    try {
        const TablesList = await Bills.findAll();
        res.status(200).send(TablesList)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteBills = async (req, res) => {
    const {id} = req.params;
    try {

        const billDetail = await Bills.findOne({
            where : {
                id
            }
        })

        if(billDetail.table_id != null){
            const tableDetail = await Tables.findOne({
                where : {
                    id : billDetail.table_id
                }
            })
            tableDetail.status="Trống";
            await tableDetail.save();
        }

        
        
        
        await BillDetails.destroy({
            where : {
                bill_id : id
            }
        })

        await Bills.destroy({
            where : {
                id : id
            }
        })


        

        res.status(200).send('Xóa thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}




module.exports = {
    createBills,
    getBills,
    deleteBills,
    getAllBill,
    getAllDetailBill,
    getBillByTableId,
    getAllDetailBills,
    finishBill,
    Billpayment,
    getAllBillTakeAway
}
