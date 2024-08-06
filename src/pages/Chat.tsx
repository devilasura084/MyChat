
import { useEffect, useState } from 'react';
import Chatsidebar from '../components/Chatsidebar'
import MainChat from '../components/MainChat'
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../types/hook';
import { ContactType} from '../types/types';
import { io, Socket } from 'socket.io-client';
import axios from 'axios';
import { setUserDetails,markMessagesSeen } from '@/types/userslice';
type ChatProps = {
  delay: number;
};
const Chat = ({delay}:ChatProps) => {
  const Navigate=useNavigate();
  const [contactdetails,setContactdetails] =useState<ContactType|undefined>();
  const Dispatch=useAppDispatch();
  const [loading, setLoading] = useState(true);
  const user=useAppSelector(state=>state.user);
  const [socket, setSocket] = useState<Socket|null>(null);
  const fetchData=async()=>{
    try {
      const response=await axios.get(`http://localhost:5000/contact/getaccounts/${user.email}`)
      const {email,username,contactlist,imageUrl,backgroundcolor}=response.data;
      const userdata={
          email:email,
          name:username,
          imageUrl:imageUrl,
          backgroundcolor:backgroundcolor,
          contactlist:contactlist
        }
      Dispatch(setUserDetails(userdata));
    } catch (error) {
      
    }
  }
  const markMessagesAsSeen = (contactEmail: string|undefined) => {
    if(!contactEmail)return;
    if (socket) {
      socket.emit('mark_messages_seen', { contactEmail, userEmail: user.email });
    }
  };
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(!token)
    {
      Navigate('/sign-in')
    }
  },[Navigate])
  useEffect(() => {
    markMessagesAsSeen(contactdetails?.email)
    if (contactdetails) {
      Dispatch(markMessagesSeen(contactdetails.email));
    }
  }, [contactdetails, Dispatch]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    const newSocket: Socket = io('http://localhost:5000', {
      auth: { token }
    });
  
    newSocket.on('connect', () => {
      console.log('Connected to server');
    });
    fetchData();
    newSocket.on('connect_error', (error: Error) => {
      console.log('Connection error:', error.message);
    });
  
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);
  if(loading)
  {
    return (<Loading
    delay={delay}
    setLoading={setLoading}
    />)
  }

  
  return (
        <div className='flex'>
        <Chatsidebar
        contactlist={user.contactlist}
        setContactdetails={setContactdetails}
        contactdetails={contactdetails}
        />
        <MainChat
        socket={socket}
        contactdetails={contactdetails}
        setContactdetails={setContactdetails}
        />
      </div>
  )
}

export default Chat