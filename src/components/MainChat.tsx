

import { ContactType } from '../types/types';
import ChatBetweenPeople from './ChatBetweenPeople';
import MainChatBar from './MainChatBar';
import MainChatTitle from './MainChatTitle';

interface mainchatprops{
  contactdetails?: ContactType
}
const MainChat = ({contactdetails}:mainchatprops) => {
  if (contactdetails === undefined) {
    return <div className='flex-1 bg-white w-3/4 rounded-md ml-4'><div /></div>;
  }
  return (
    <div className='flex-1 bg-white rounded-r-md ml-4'>
      <MainChatTitle
      contactname={contactdetails.name}
      contactimg={contactdetails.imageUrl}
      contactcolor={contactdetails.backgroundcolor}
      />
      <ChatBetweenPeople
      messages={contactdetails.messages}
      />
      <MainChatBar/>
    </div>
  )
}

export default MainChat;