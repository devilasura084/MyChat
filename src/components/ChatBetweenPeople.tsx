import { Message } from "../types/types"
import { useAppSelector } from "../types/hook"
interface ChatBetweenPeoplepeops{
    messages:Message[]
}
const ChatBetweenPeople = ({messages}:ChatBetweenPeoplepeops) => {
    const user=useAppSelector(state=>state.user);
  return (
    <div className=' h-[75%] bg-slate-100 p-4 rounded-md'>
        {
            messages.map((message,index)=>(
                message.name===user.name?<div className="bubble right" key={index}>{message.message}</div>:<div key={index} className='bubble left'>{message.message}</div>
            ))
        }
    </div>
  )
}

export default ChatBetweenPeople