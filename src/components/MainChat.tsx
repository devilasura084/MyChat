
import {contactlist} from '../Demodata'
import MainChatTitle from './MainChatTitle';
interface mainchatprops{
  position: number | undefined;
}
const MainChat = ({position}:mainchatprops) => {
  if (position === undefined || position < 0 || position >= contactlist.length) {
    return <div className='main-chat'><div /></div>;
  }
  const contact=contactlist[position];
  return (
    <div className='main-chat'>
      <MainChatTitle
      contactname={contact.name}
      contactimg={contact.imageUrl}
      />
    </div>
  )
}

export default MainChat;