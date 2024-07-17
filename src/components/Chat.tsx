
import Chatsidebar from './Chatsidebar'
import MainChat from './MainChat'


const Chat = () => {
  const userdata={
    name:"Subhoraj Das",
    imageUrl:"https://via.placeholder.com/50"
  }
  return (
    <div className='main-chat-div'>
      <Chatsidebar
      userdata={userdata}
      />
      <MainChat/>
    </div>
  )
}

export default Chat