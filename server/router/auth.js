const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');
const Order = require('../model/orderSchema');

router.get('/', (req,res) => {
    res.send(`Hello MERN World Arvind`);
});

//using promising
// router.post('/register', (req,res) => {

//     const  {name,email,mobile,password,cpassword } = req.body;
//     if(!name || !email || !mobile || !password || !cpassword){
//         return res.status(422).json({ error: "plz fill the field properly "});
//     }

//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }

//         const user = new User({name,email,mobile,password,cpassword });

//         user.save().then(() => {
//             res.status(201).json({message:"user registered successfully"});
//         }).catch((err) => res.status(500).json({error:"Failed to register"}));
//     }).catch((err) => {console.log(err)});

// });

//using async
router.post('/register', async(req,res) => {

    const  {name,email,mobile,password,cpassword } = req.body;
    if(!name || !email || !mobile || !password || !cpassword){
        return res.status(422).json({ error: "plz fill the field properly "});
    }

    try{
       const userExist = await User.findOne({email:email});

       if(userExist){
            return res.status(422).json({error: "Email already exist"});
        }else if(password !== cpassword)
        {
            return res.status(422).json({error: "password are not matching"});
        }else{
            const user = new User({name,email,mobile,password,cpassword });
            await user.save();
            res.status(201).json({message:"user registered successfully"});
        }
    }catch(err){
        console.log(err);
    }
    
});

router.post('/bookorder', async(req,res) => {

    const  {name,email,mobile,product_id,home_delivery,address} = req.body;
    if(!name || !email || !mobile || !product_id || !home_deliver){
        return res.status(422).json({ error: "plz fill the field properly "});
    }

    try{
            const order = new Order({name,email,mobile,product_id,home_delivery,address});
            await order.save();
            res.status(201).json({message:"Order Confirmed"});
    }catch(err){
        console.log(err);
    }
    
});

router.post('/signin',async(req,res) =>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please fill the data"});
        }

        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password)

            if(!isMatch){
                res.status(400).json({error:"invalid credential"});
            }else{
                res.json({message:"signin successfully"});
            }
        }else{
            res.status(400).json({error:"invalid credential"});
        }
        

    }catch(err){
        console.log(err);
    }
})
module.exports = router;