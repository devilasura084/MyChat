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
router.route('/setprofilepicture/:email').put(async (req,res)=>{
    try {
        const {email}=req.params;
        const updatedata=req.body;
        const updateduser=await userModel.findOneAndUpdate(
            {email:email},
        updatedata,
        {
            new:true,runValidators:true
        }
        )
        if (!updateduser)
            return res.status(404).json({ message: 'User not found' });
          res.status(200).json({ message: 'Profile picture updated successfully', user: updateduser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
    
})
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
            contactlist:existingUser.contactlist,
            imageUrl:existingUser.imageUrl,
            backgroundcolor:existingUser.backgroundcolor,
        }
        res.json(data)
        console.log("succesfully logged in");
    }
    catch{
        res.status(500).send('Error saving data');
    }
})
module.exports=router;