
import { useEffect, useState } from 'react';
import Chatsidebar from '../components/Chatsidebar'
import MainChat from '../components/MainChat'
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../types/hook';
import { ContactType } from '../types/types';
import { io, Socket } from 'socket.io-client';
type ChatProps = {
  delay: number;
};
const Chat = ({delay}:ChatProps) => {
  const Navigate=useNavigate();
  const [contactdetails,setContactdetails] =useState<ContactType|undefined>();
  const [loading, setLoading] = useState(true);
  const user=useAppSelector(state=>state.user);
  const [socket, setSocket] = useState<Socket|null>(null);
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(!token)
    {
      Navigate('/sign-in')
    }
  },[Navigate])
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    const newSocket: Socket = io('http://localhost:5000', {
      auth: { token }
    });
  
    newSocket.on('connect', () => {
      console.log('Connected to server');
    });
  
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