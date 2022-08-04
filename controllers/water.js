const { Op } = require('sequelize');
const {waters , sequelize} = require('../models');
var _ = require('lodash');



const createWaters = async (req, res) => {
    

    const {name , imgSrc , price , size , typeOfDinkId , status} = req.body;

    try {

        const newWater = await waters.bulkCreate([
            {name , imgSrc , price:price*1 , size:"Size nhỏ", typeOfDinkId , status},
            {name , imgSrc , price:price*1.25 , size:"Size trung bình", typeOfDinkId , status},
            {name , imgSrc , price:price*1.5 , size:"Size lớn", typeOfDinkId , status},
        ])
        res.status(201).send(newWater)
    } catch (error) {
        res.status(500).send(error)
    }


    
}





const getAllWaters = async (req, res) => {
    const {name} = req.query;

    try {
        if(name){
            const WatersList = await waters.findAll({
                where : {
                    name : {
                        [Op.like] : `%${name}%`
                    }
                },
            });
            let waterListGroup = _.groupBy(WatersList,"name")
            

            const array = Object.values(waterListGroup);

            res.status(200).send(array);
        }else{
            const WatersList = await waters.findAll();
            let waterListGroup = _.groupBy(WatersList,"name")
            

            const array = Object.values(waterListGroup);

            res.status(200).send(array);
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



const updateWaters = async (req , res) => {
    const {id} = req.params;
    const {name , imgSrc , price , size , typeOfDrink_id , status} = req.body;

    try {
        const detailWaters = await waters.findOne({
            where : {
                id
            }
        })
        detailWaters.name = name;
        detailWaters.imgSrc = imgSrc;
        detailWaters.price = price;
        detailWaters.size = size;
        detailWaters.typeOfDrink_id = typeOfDrink_id;
        detailWaters.status = status;


        await detailWaters.save();
        res.status(200).send(detailWaters)
    } catch (error) {
        res.status(500).send(error)
    }
}

// const updateWatersConHang = async (req , res) => {
//     // const {id} = req.params;


//     // try {
//     //     const detailWaters = await waters.findAll({
//     //         where : {
//     //             name : id
//     //         }
//     //     })

//     //     const status = detailWaters[0].status

//     //     const [result] = await sequelize.query(`
//     //     UPDATE waters
//     //     SET status = 'Còn hàng'
//     //     WHERE name='${id}' `)
//     //     res.status(200).send(status)
//     // } catch (error) {
//     //     res.status(500).send(error)
//     // }

//     res.status(200).send('dssd')
// }

const updateWatersConHang = async (req , res) => {
    const {id} = req.params;


    try {
        const detailWaters = await waters.findAll({
            where : {
                name : id
            }
        })
        const status = detailWaters[0].status

        const [result] = await sequelize.query(`
        UPDATE waters
        SET status = 'Còn hàng'
        WHERE name='${id}' `)
        res.status(200).send(status)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateWatersHetHang = async (req , res) => {
    const {id} = req.params;


    try {
        const detailWaters = await waters.findAll({
            where : {
                name : id
            }
        })

        const status = detailWaters[0].status

        const [result] = await sequelize.query(`
            UPDATE waters
            SET status = 'Hết hàng'
            WHERE name='${id}' `)
        res.status(200).send(status)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteWaters = async (req, res) => {
    const {id} = req.params;

    const detailWaters = await waters.findOne({
        where : {
            id
        }
    })

    try {
        await waters.destroy({
            where : {
                name : detailWaters.name
            }
        })
        res.status(200).send('Xóa thành công')
    } catch (error) {
        res.status(500).send(error)
    }
}
    


const getDetaiWaters = async (req , res) => {
    
    const {id} = req.params;

    try {
        const detailWaters = await waters.findOne({
            where : {
                id
            }
        })
        res.status(200).send(detailWaters);
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetaiWatersByName = async (req , res) => {
    
    const {name} = req.body;

    try {
        const [result] = await sequelize.query(`
                SELECT * 
                FROM waters
                where name = '${name}'
        `)
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error)
    }
}



const getAllWatersFillter = async (req, res) => {
    const {name} = req.query;

    if(name){
        const [result] = await sequelize.query(`
            select * from waters where name like '%${name}%' group by name
        `)
        res.status(200).send(result);
    }else{
        try {

            
            const [result] = await sequelize.query(`
                SELECT * 
                FROM waters
                group by name
            `)


            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
   

}


module.exports = {
    createWaters,   
    getAllWaters,
    updateWatersHetHang,
    updateWatersConHang,
    deleteWaters,
    getDetaiWaters,
    getAllWatersFillter,
    getDetaiWatersByName,
    updateWaters
}
