

interface MainChatTitleprops{
    contactname:string;
    contactimg:string
}
const MainChatTitle = ({contactname,contactimg}:MainChatTitleprops) => {
  return (
    <div className="chat-title"><img src={contactimg} alt={`${contactname}'s image `} />
    <div >
      {contactname}
    </div></div>
  )
}

export default MainChatTitle