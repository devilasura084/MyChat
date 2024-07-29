const express=require('express')
const userModel=require('../models/User')
const router=express.Router();
const jwt=require('jsonwebtoken')
router.route('/Sign-up').post(async (req,res)=>{
    try{
        const {email}=req.body;
        const existingUser=await userModel.findOne({email});
        if(existingUser)
            return res.status(400).json({ message: 'Email already taken' });
        const user=new userModel(req.body);
        await user.save();
        res.status(200).send({message:'Data saved successfully'});
        console.log('Data send succefully');
    }
    catch{
        res.status(500).send('Error saving data');
    }
});
router.route('/Sign-in').post(async(req,res)=>{
    try{
        const {email,password}=req.body;
        const existingUser=await userModel.findOne({email});
        if(existingUser===null)
            return res.status(400).json({ message: 'Email does not exist,please sign up' });
        if(existingUser.password!=password)
            return res.status(400).json({ message: 'Email or password is wrong!' });
        const token=jwt.sign({email:req.body.email},'YOUR_SECRET_KEY');
        const data={
            token:token,
            username:existingUser.name,
            email:existingUser.email,
            contactlist:existingUser.contactlist
        }
        res.json(data)
        console.log("succesfully logged in");
    }
    catch{
        res.status(500).send('Error saving data');
    }
})
module.exports=router;