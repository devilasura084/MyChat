
import { useState } from 'react';
import Chatsidebar from '../components/Chatsidebar'
import MainChat from '../components/MainChat'
import Loading from '../components/Loading';
type ChatProps = {
  delay: number;
};

const Chat = ({delay}:ChatProps) => {
  const [position,setPosition] =useState<number|undefined>();
  const [loading, setLoading] = useState(true);
  if(loading)
  {
    return (<Loading
    delay={delay}
    setLoading={setLoading}
    />)
  }
  const userdata={
    name:"Subhoraj Das",
    imageUrl:"https://via.placeholder.com/50"
  }
  return (
        <div className='main-chat-div'>
        <Chatsidebar
        userdata={userdata}
        setPosition={setPosition}
        />
        <MainChat
        position={position}
        />
      </div>
  )
}

export default Chat