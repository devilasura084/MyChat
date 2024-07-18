
import { Suspense, useState } from 'react';
import Chatsidebar from './Chatsidebar'
import MainChat from './MainChat'
import Loading from './Loading';


const Chat = () => {
  const [position,setPosition] =useState<number|undefined>();
  const userdata={
    name:"Subhoraj Das",
    imageUrl:"https://via.placeholder.com/50"
  }
  return (
    <Suspense fallback={<Loading/>}>
        <div className='main-chat-div'>
        <Chatsidebar
        userdata={userdata}
        setPosition={setPosition}
        />
        <MainChat
        position={position}
        />
      </div>
    </Suspense>
  )
}

export default Chat