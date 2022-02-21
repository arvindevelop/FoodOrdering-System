const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
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
    password:{
        type: String,
        required : true
    },
    cpassword:{
        type: String,
        required : true
    }
})

//hashing
userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 12);
        this.cpassword = bcrypt.hashSync(this.cpassword, 12);
    }
    next();
})

const Customer = mongoose.model('Customer',userSchema);

module.exports = Customer;
