const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
const authenticateJWT=require('./middleware/authMiddleware');
require('dotenv').config();
app.use(cors());
app.use(bodyparser.json());
const authrouter=require('../backend/routes/auth');
const contactrouter=require('./routes/contact');
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error(`Failed to connect to MongoDB: ${err}`);
  });
app.use('/auth',authrouter);
app.use('/contact',contactrouter);
app.get('/chat',authenticateJWT,(req,res)=>{
    res.send('This is protected route')
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
});