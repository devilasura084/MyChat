

import { ContactType } from '../types/types';
import ChatBetweenPeople from './ChatBetweenPeople';
import MainChatBar from './MainChatBar';
import MainChatTitle from './MainChatTitle';

interface mainchatprops{
  contactdetails?: ContactType
}
const MainChat = ({contactdetails}:mainchatprops) => {
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
      messages={contactdetails.messages}
      />
      <MainChatBar/>
    </div>
  )
}

export default MainChat;