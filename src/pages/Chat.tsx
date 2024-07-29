
import { useEffect, useState } from 'react';
import Chatsidebar from '../components/Chatsidebar'
import MainChat from '../components/MainChat'
import Loading from '../components/Loading';
import {contactlist,messages} from '../Demodata';
import { useNavigate } from 'react-router-dom';

type ChatProps = {
  delay: number;
  userdetail:userdetailtype
};
interface userdetailtype {
  email:string,
  name:string,
  contactlist:string[]
}
interface contacts{
  name:string,
  email:string,
  imageUrl:string
}
const Chat = ({delay,userdetail}:ChatProps) => {
  const Navigate=useNavigate();
  const [contactdetails,setContactdetails] =useState<contacts|undefined>();
  const [loading, setLoading] = useState(true);
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
  const userdata={
    name:userdetail.name,
    imageUrl:"https://via.placeholder.com/50"
  }
  return (
        <div className='main-chat-div'>
        <Chatsidebar
        contactlist={contactlist}
        userdata={userdata}
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