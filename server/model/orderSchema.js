const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');

const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    mobile:{
        type: Number,
        required : true
    },
    product_id: 
    {
        type: Number,
        required: true
    },
    address:{
        type:String,
        required:true
    }
})

//hashing
orderSchema.pre('save', async function(next) {
    //check signin or not
    next();
})

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;
