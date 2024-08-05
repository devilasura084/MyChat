const express=require('express')
const userModel=require('../models/User')
const router=express.Router();
router.route('/addaccount').post(async(req,res)=>{
    try {
        const {useremail,receivermail}=req.body;
        console.log(receivermail)
        const user = await userModel.findOne({ email: useremail });
        const contact = await userModel.findOne({ email:receivermail });
        if (user===null) {
            return res.status(404).json({ message: 'User not found' });
        }
        if(contact===null)
            return res.status(400).json({ message: 'Email does not exist'});
        if (user.contactlist.some(c => c.email === receivermail)) {
            return res.status(400).json({ message: "Contact already exists" });
        }
        user.contactlist.push({
            name:contact.name,
            email:contact.email,
            imageUrl:contact.imageUrl,
            backgroundcolor:contact.backgroundcolor,
            messages:[]
        })
        await user.save();
        res.status(200).json({ message: "Contact added successfully", contact: { name: contact.name, email: contact.email,imageUrl:contact.imageUrl,backgroundcolor:contact.backgroundcolor} });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})
router.route('/deleteaccount').post(async(req,res)=>{
    try {
        const {useremail,receiveremail}=req.body;
        const user = await userModel.findOne({ email: useremail });
        if (user===null) {
            return res.status(404).json({ message: 'User not found' });
        }
        const contactIndex=user.contactlist.findIndex(c=>c.email===receiveremail);
        if (contactIndex === -1) {
            return res.status(404).json({ message: 'Contact not found in the contact list' });
        }
        user.contactlist.splice(contactIndex, 1);
        await user.save();

        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})
module.exports=router;