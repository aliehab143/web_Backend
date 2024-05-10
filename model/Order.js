const mongoose = require('mongoose');

const Order = mongoose.Schema({
    userId:{type:String, required:true},
    products: [
        {
          productId:{
                type:String, 
                required:true
            },
            quantity: {
                type: Number,
                default: 1,
            },
        }
        
    ],
    city:{type:String},
    country:{type:String},
    street:{type:String},
    phoneNumber:{type:Number},
})

module.exports = mongoose.model('Order',Order)