

import { useEffect } from 'react';
import { ContactType, Message, UserDetailType } from '../types/types';
import ChatBetweenPeople from './ChatBetweenPeople';
import MainChatBar from './MainChatBar';
import MainChatTitle from './MainChatTitle';
import { useAppSelector } from '@/types/hook';
import { Socket } from 'socket.io-client';
import { addMessage,addContact } from '@/types/userslice';
import { useDispatch } from 'react-redux';
interface mainchatprops{
  socket:Socket|null
  contactdetails?: ContactType
  setContactdetails:React.Dispatch<React.SetStateAction<ContactType | undefined>>;
}
interface Messagedataprops{
  messageData:Message,
  senderdata:UserDetailType
}
const MainChat = ({socket,contactdetails,setContactdetails}:mainchatprops) => {
  const dispatch=useDispatch()
  const user=useAppSelector(state=>state.user);
  
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (Messagedata: Messagedataprops) => {
      console.log(Messagedata.messageData.message);
      const existingContact = user.contactlist.find(c => c.email === Messagedata.senderdata.email);
      if (!existingContact) {
        const contactdata = {
          email: Messagedata.senderdata.email,
          name: Messagedata.senderdata.name,
          imageUrl: Messagedata.senderdata.imageUrl,
          backgroundcolor: Messagedata.senderdata.backgroundcolor,
          messages: []
        };
        dispatch(addContact(contactdata));
      }

      dispatch(addMessage({
        contactEmail: Messagedata.senderdata.email,
        message: Messagedata.messageData
      }));

      if (contactdetails && contactdetails.email === Messagedata.senderdata.email) {
        setContactdetails(prevDetails => {
          if (!prevDetails) return prevDetails;
          return {
            ...prevDetails,
            messages: [...prevDetails.messages, Messagedata.messageData]
          };
        });
      }
    };

      socket.off(user.email);
      socket.on(user.email, handleNewMessage);

    return () => {
      socket.off(user.email, handleNewMessage);
    };
  }, [socket, user.email, dispatch, contactdetails, user]);
  return (
    <>{contactdetails?
      <div className='flex-1 bg-white rounded-r-md ml-4'>
      <MainChatTitle
      contactname={contactdetails.name}
      contactimg={contactdetails.imageUrl}
      contactcolor={contactdetails.backgroundcolor}
      />
      <ChatBetweenPeople
      contactdetails={contactdetails}
      socket={socket}
      />
      <MainChatBar
      contactemail={contactdetails.email}
      socket={socket}
      setContactdetails={setContactdetails}
      />
    </div>:
    <div className='flex-1 bg-white w-3/4 rounded-md ml-4'><div /></div>
    }
    
    </>
  )
}

export default MainChat;