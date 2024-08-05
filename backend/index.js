const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
const authenticateJWT=require('./middleware/authMiddleware');
const http = require('http');
const { Server, Socket } = require('socket.io');
const jwt = require('jsonwebtoken');

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
function verifyToken(token) {
  try {
    return jwt.verify(token,process.env.SECRET_KEY);
  } catch (error) {
    return null;
  }
}
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Authentication error'));
  }
  
  const user = verifyToken(token);
  if (!user) {
    return next(new Error('Authentication error'));
  }

  socket.user = user;
  next();
});
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.user.email}`);

  socket.on('chat message', async (msg) => {
    try {
      const sender = await userModel.findOne({ email: msg.sender });
      const receiver = await userModel.findOne({ email: msg.receiver });

      if (!sender || !receiver) {
        console.error('Sender or receiver not found');
        return;
      }

      const messageData = {
        email:msg.sender,
        message: msg.content,
        date: new Date().toISOString,
        edited:false,
        deleted:false,
      };
      const realdata={
        messageData:messageData,
        senderdata:sender
      }
      const senderContact = sender.contactlist.find(c => c.email === receiver.email);
      senderContact.messages.push(messageData);
      
      await sender.save();
      const receiverContact = receiver.contactlist.find(c => c.email === sender.email);
      if (receiverContact) {
        receiverContact.messages.push(messageData);
      } else {
        receiver.contactlist.push({
          name: sender.name,
          email: sender.email,
          imageUrl:sender.imageUrl,
          backgroundcolor:sender.backgroundcolor,
          messages: [messageData]
        });
      }
      await receiver.save();
      io.emit(receiver.email, realdata);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});