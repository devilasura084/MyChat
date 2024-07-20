const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const userModel=require('./models/User');
const app=express();
const port=5000;
app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/');
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error(`Failed to connect to MongoDB: ${err}`);
  });
app.post('/api/Sign-up',async (req,res)=>{
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
app.post('/api/Sign-in',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const existingUser=await userModel.findOne({email});
        if(existingUser===null)
            return res.status(400).json({ message: 'Email does not exist,please sign up' });
        if(existingUser.password!=password)
            return res.status(400).json({ message: 'Email or password is wrong!' });
        res.status(200).send({message:'Succesfully logged in'});
        console.log("succesfully logged in");
    }
    catch{
        res.status(500).send('Error saving data');
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});