const jwt = require('jsonwebtoken');
const userModel = require('../models/User');

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    return null;
  }
}

function setupSocket(io) {
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
    socket.on('delete message',async (msg)=>{
      try {
        
      } catch (error) {
        
      }
    })
    socket.on('chat message', async (msg) => {
      try {
        const sender = await userModel.findOne({ email: msg.sender });
        const receiver = await userModel.findOne({ email: msg.receiver });

        if (!sender || !receiver) {
          console.error('Sender or receiver not found');
          return;
        }

        const messageData = {
          email: msg.sender,
          message: msg.content,
          date: new Date().toISOString(),
          edited: false,
          deleted: false,
          seen:false
        };
        const realdata = {
          messageData: messageData,
          senderdata: sender
        }

        const senderContact = sender.contactlist.find(c => c.email === receiver.email);
        senderContact.messages.push(messageData);
        
        await sender.save();

        const receiverContact = receiver.contactlist.find(c => c.email === sender.email);
        if (receiverContact) {
          receiverContact.messages.push(messageData);
        } else {
          receiver.contactlist.push({
            email: sender.email,
            messages: [messageData]
          });
        }
        await receiver.save();
        io.emit(receiver.email, realdata);
      } catch (error) {
        console.error('Error saving message:', error);
      }
    });
    socket.on('mark_messages_seen', async ({ contactEmail, userEmail }) => {
        try {
          const user = await userModel.findOne({ email: userEmail });
          if (user) {
            const contact = user.contactlist.find(c => c.email === contactEmail);
            if (contact) {
              contact.messages.forEach(message => {
                message.seen = true;
              });
              await user.save();
            }
          }
        } catch (error) {
          console.error('Error marking messages as seen:', error);
        }
    });
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}

module.exports = setupSocket;