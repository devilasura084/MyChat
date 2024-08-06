import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Socket } from "socket.io-client"
import { addMessage } from "@/types/userslice"
import { useAppDispatch, useAppSelector } from "@/types/hook"
import { ContactType } from "@/types/types"
interface mainchatbarprops{
  contactemail:string,
  socket:Socket|null,
  setContactdetails:React.Dispatch<React.SetStateAction<ContactType | undefined>>;
}

const MainChatBar = ({contactemail,socket,setContactdetails}:mainchatbarprops) => {
  const [message,setmessage]=useState('');
  const dispatch=useAppDispatch();
  const user=useAppSelector(state=>state.user);
  const handleSend = () => {
    if ( !message|| message.trim().length===0) return;
    const messagedata = {
      contactEmail: contactemail,
      message: {
        email: user.email,
        message: message,
        date: new Date().toISOString(),
        edited: false,
        deleted: false,
        seen:false
      }
    };
    dispatch(addMessage(messagedata));
    const messagetosend = {
      sender: user.email,
      receiver: contactemail,
      content: message
    };
    socket?.emit('chat message', messagetosend);
    setmessage('');
    setContactdetails(prevDetails => {
      if (!prevDetails) return prevDetails;
      return {
        ...prevDetails,
        messages: [...prevDetails.messages, messagedata.message]
      };
    });
  };
  return (
    <div className="flex w-full gap-2 p-1 items-center h-[10%]">
      <Input value={message} className="h-full border-2" type="text" placeholder="Type here...." onChange={(e)=>{setmessage(e.target.value)}}/>
      <Button onClick={handleSend} className="h-full" type="submit">Send</Button>
    </div>
  )
}

export default MainChatBar