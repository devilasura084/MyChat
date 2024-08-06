const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
const authenticateJWT=require('./middleware/authMiddleware');
const http = require('http');
const { Server} = require('socket.io');
const jwt = require('jsonwebtoken');
const setupSocket = require('./routes/message');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
mongoose.connection.on('error', (err) => {
  console.error(`Failed to connect to MongoDB: {err}`);
});
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"]
    }
  });
app.use(cors());
app.use(bodyparser.json());
const authrouter=require('../backend/routes/auth');
const contactrouter=require('./routes/contact');
const userModel = require('./models/User');
app.use('/auth',authrouter);
app.use('/contact',contactrouter);
app.get('/chat',authenticateJWT,(req,res)=>{
    res.send('This is protected route')
})
setupSocket(io);
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});