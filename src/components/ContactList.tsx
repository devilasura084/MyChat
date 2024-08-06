import Deleteaccount from "@/services/Deleteaccount";
import { ContactType } from "../types/types";
import { useAppSelector } from "@/types/hook";



interface contactlistprops{
    setContactdetails: React.Dispatch<React.SetStateAction<ContactType| undefined>>;
    contacts:ContactType[];
    contactdetails?:ContactType
}
const ContactList = ({setContactdetails,contacts,contactdetails}:contactlistprops) => {
    const user=useAppSelector(state=>state.user);
    const handleClick=(key:ContactType)=>{
        setContactdetails(key);
    }
    const getUnreadCount = (contact: ContactType) => {
        
        const count= contact.messages.filter(message => !message.seen && message.email !== user.email).length;
        if(count<1)return "";
        return count;
      };
  return (
    <div className="flex flex-col overflow-auto custom-scrollbar">
        {contacts.map((contact,index)=>(
            <div style={{backgroundColor:`${contact.email==contactdetails?.email?'#e2e2e2':'white'}`}} className=" p-2 border-b" key={index}>
            <div onClick={()=>handleClick(contact)}
            className='flex cursor-pointer items-center gap-2' >
                <img className="w-14 rounded-full  border-2" src={contact.imageUrl} alt={`${contact.name}'s avatar`}/>
                <div>{contact.name}</div>
                <div className="text-primary text-xs ml-auto mr-4 font-bold">{`${getUnreadCount(contact)}`}</div>
                <Deleteaccount
                email={contact.email}
                setContactdetails={setContactdetails}
                />
            </div>
            </div>
        ))}
    </div>
  )
}

export default ContactList