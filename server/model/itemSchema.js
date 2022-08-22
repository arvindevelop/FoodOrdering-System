const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    pid:{
        type: Number,
        required : true
    },
    productname:{
        type: String,
        required : true
    },
    category:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    description:
    {
        type: String,
        required : true
    }
})


const Item = mongoose.model('Item',itemSchema);

module.exports = Item;
