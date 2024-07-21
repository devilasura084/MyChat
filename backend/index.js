const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const userModel=require('./models/User');
const app=express();
const jwt=require('jsonwebtoken')
const authenticateJWT=require('./middleware/authMiddleware');
require('dotenv').config();
app.use(cors());
app.use(bodyparser.json());

mongoose.connect(process.env.MONGO_URL);
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
        const token=jwt.sign({email:req.body.email},'YOUR_SECRET_KEY');
        res.json({token})
        console.log("succesfully logged in");
    }
    catch{
        res.status(500).send('Error saving data');
    }
})
app.get('/chat',authenticateJWT,(req,res)=>{
    res.send('This is protected route')
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
});