import Deleteaccount from "@/services/Deleteaccount";
import { ContactType } from "../types/types";
import { Separator } from "@/components/ui/separator"


interface contactlistprops{
    setContactdetails: React.Dispatch<React.SetStateAction<ContactType| undefined>>;
    contacts:ContactType[];
}
const ContactList = ({setContactdetails,contacts}:contactlistprops) => {
    const handleClick=(key:ContactType)=>{
        setContactdetails(key);}
  return (
    <div className="flex flex-col ml-2 mt-4 overflow-auto custom-scrollbar">
        {contacts.map((contact,index)=>(
            <>
            <div onClick={()=>handleClick(contact)} className='flex cursor-pointer items-center gap-2' key={index}>
                
                <img className="w-14 rounded-full  border-2" src={contact.imageUrl} alt={`${contact.name}'s avatar`}/>
                <div>{contact.name}</div>
                <Deleteaccount
                email={contact.email}
                />
            </div>
            <Separator  />
            </>
        ))}
    </div>
  )
}

export default ContactList