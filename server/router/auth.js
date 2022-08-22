const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');
const Order = require('../model/orderSchema');
const Item = require('../model/itemSchema');


//using async
router.post('/register', async(req,res) => {

    const  {name,email,mobile,password,cpassword } = req.body;
    if(!name || !email || !mobile || !password || !cpassword){
        return res.status(422).json({ error: "plz fill the field properly",status:422});
    }

    try{
       const userExist = await User.findOne({email:email});

       if(userExist){
            return res.status(422).json({error: "Email already exist",status:422});
        }else if(password !== cpassword)
        {
            return res.status(422).json({error: "password are not matching",status:422});
        }else{
            const user = new User({name,email,mobile,password,cpassword });
            await user.save();
            res.status(201).json({message:"user registered successfully",status:201});
        }
    }catch(err){
        console.log(err);
    }
    
});

router.post('/bookorder', async(req,res) => {

    const  {name,email,mobile,product_name,product_id,address} = req.body;
    if(!name || !email || !mobile || !product_name || !product_id || !address){
        return res.status(422).json({ error: "plz fill the field properly",status:422});
    }

    try{
            const order = new Order({name,email,mobile,product_name,product_id,address});
            await order.save();
            res.status(201).json({message:"Order Confirmed",status:201});
    }catch(err){
        console.log(err);
    }
    
});

router.post('/createItem', async(req,res) => {

    const  {pid, productname, category, price, description} = req.body;
    if(!pid || !productname || !category || !price || !description){
        return res.status(422).json({ error: "plz fill the field properly",status:422});
    }

    try{
            const item = new Item({pid, productname, category, price, description});
            await item.save();
            res.status(201).json({message:"Item Added",status:201});
    }catch(err){
        console.log(err);
    }
    
});

router.get('/getitem', async (req,res,next)=>{
    try{
      const item = await Item.find();
      return res.status(200).json({data: item});
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'server error' });
    }
  });

router.post('/signin',async(req,res) =>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please fill the data",status:400});
        }

        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password)

            if(!isMatch){
                res.status(400).json({error:"invalid credential",status:400});
            }else{
                res.status(201).json({message:"signin successfully",status:201,userData:userLogin});
            }
        }else{
            res.status(400).json({error:"invalid credential",status:400});
        }
        

    }catch(err){
        console.log(err);
    }
})
module.exports = router;