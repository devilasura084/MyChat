

import ChatBetweenPeople from './ChatBetweenPeople';
import MainChatBar from './MainChatBar';
import MainChatTitle from './MainChatTitle';
interface mainchatprops{
  contactdetails: contacts | undefined;
  messages:message[]
}
interface contacts{
  name:string,
  email:string,
  imageUrl:string
}
interface message{
      sender: string,
      message: string,
      timestamp: Date
}
const MainChat = ({messages,contactdetails}:mainchatprops) => {
  if (contactdetails === undefined) {
    return <div className='main-chat'><div /></div>;
  }
  return (
    <div className='main-chat'>
      <MainChatTitle
      contactname={contactdetails.name}
      contactimg={contactdetails.imageUrl}
      />
      <ChatBetweenPeople
      messages={messages}
      />
      <MainChatBar/>
    </div>
  )
}

export default MainChat;