
import { useEffect, useState } from 'react';
import Chatsidebar from './Chatsidebar'
import MainChat from './MainChat'
import Loading from './Loading';


const Chat = () => {
  const [loading, setLoading] = useState(true);
  const [position,setPosition] =useState<number|undefined>();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  }, []);
  const userdata={
    name:"Subhoraj Das",
    imageUrl:"https://via.placeholder.com/50"
  }
  return (
    <div>
      {loading?(<Loading/>):(
        <div className='main-chat-div'>
        <Chatsidebar
        userdata={userdata}
        setPosition={setPosition}
        />
        <MainChat
        position={position}
        />
      </div>
      )}
    </div>
  )
}

export default Chat