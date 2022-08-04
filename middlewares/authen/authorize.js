
const authorize = (arrType) => 
     (req , res , next) => {
        const {employee} = req;

    
        if(arrType.findIndex((e) => e === employee.position) > -1){
            next();
        }else{
            res.status(403).send("Bạn chưa đăng nhập , những có quyền ")
        } 
}

module.exports = {
    authorize
}