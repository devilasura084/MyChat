
import { useEffect, useState } from 'react';
import Chatsidebar from '../components/Chatsidebar'
import MainChat from '../components/MainChat'
import Loading from '../components/Loading';
import {messages} from '../Demodata';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../types/hook';
import { contacttype } from '../types/types';

type ChatProps = {
  delay: number;
};
const Chat = ({delay}:ChatProps) => {
  const Navigate=useNavigate();
  const [contactdetails,setContactdetails] =useState<contacttype|undefined>();
  const [loading, setLoading] = useState(true);
  const user=useAppSelector(state=>state.user);
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(!token)
    {
      Navigate('/sign-in')
    }
  },[Navigate])
  if(loading)
  {
    return (<Loading
    delay={delay}
    setLoading={setLoading}
    />)
  }
  return (
        <div className='main-chat-div'>
        <Chatsidebar
        contactlist={user.contactlist}
        setContactdetails={setContactdetails}
        />
        <MainChat
        contactdetails={contactdetails}
        messages={messages}
        />
      </div>
  )
}

export default Chat