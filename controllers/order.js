const Order = require('../model/Order')

const getOrders = async (req,res) =>{
    try {
        //userid
        const orders = await Order.findById(req.params.id)
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createOrder = async(req,res)=>{
    try {
        const savedOrder = await Order.create(req.body);
        res.status(200).json(savedOrder)   
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

// getallorder by id 
// 
module.exports = {
    getOrders,
    createOrder,

}