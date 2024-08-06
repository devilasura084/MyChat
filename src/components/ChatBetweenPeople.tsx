import { ContactType} from "../types/types"
import { useAppSelector } from "../types/hook"
import { useEffect, useRef } from "react";
interface ChatBetweenPeoplepeops{
    contactdetails:ContactType
}
const ChatBetweenPeople = ({contactdetails}:ChatBetweenPeoplepeops) => {
    const user=useAppSelector(state=>state.user);
    const chatEndRef = useRef<HTMLDivElement | null>(null);
    if(!contactdetails.messages)
    {
        return <div className=' h-[75%] bg-slate-100 p-4 rounded-md'></div>
    }
    
    const luminasence=(contactcolor:string)=>{
        let r = parseInt(contactcolor.substring(0, 2), 16);
        let g = parseInt(contactcolor.substring(2, 4), 16);
        let b = parseInt(contactcolor.substring(4, 6), 16);
        const newr=r/255;
        const newg=g/255;
        const newb=b/255;
        const lum=0.2126*newr+0.7152*newg+0.0722*newb;
        return lum>0.6?'black':'white';
      }
      useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'instant' });
        }
    }, [contactdetails.messages]);
  return (
    <div className=' h-[73svh] bg-slate-100 p-4 rounded-md flex flex-col gap-2 overflow-auto custom-scrollbar'>
        {
            contactdetails.messages.map((message,index)=>(
                message.email===user.email?
                <div className=" w-full p-1 " key={index}>
                    <div style={{backgroundColor:`#${user.backgroundcolor}`,color:luminasence(user.backgroundcolor)}} className="w-fit ml-auto text-right p-4 rounded-lg text-wrap max-w-96 break-words">
                    {message.message}
                    </div>
                    </div>:
                    <div key={index} className=' w-full  p-1'>
                        <div style={{backgroundColor:`#${contactdetails.backgroundcolor}`,color:luminasence(contactdetails.backgroundcolor)}}  className="w-fit mr-auto text-left p-4 rounded-lg text-wrap max-w-96 break-words">
                        {message.message}
                        </div>
                        </div>
            ))
        }
         <div ref={chatEndRef} />
    </div>
  )
}

export default ChatBetweenPeople