
interface message{
    sender: string,
    message: string,
    timestamp: Date
}
interface ChatBetweenPeoplepeops{
    messages:message[]
}
const ChatBetweenPeople = ({messages}:ChatBetweenPeoplepeops) => {
  return (
    <div className='chat-between-people'>
        {
            messages.map((message,index)=>(
                message.sender==="User1"?<div className="bubble right" key={index}>{message.message}</div>:<div key={index} className='bubble left'>{message.message}</div>
            ))
        }
    </div>
  )
}

export default ChatBetweenPeople