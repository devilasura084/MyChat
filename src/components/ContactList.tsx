import { ContactType } from "../types/types";


interface contactlistprops{
    setContactdetails: React.Dispatch<React.SetStateAction<ContactType| undefined>>;
    contacts:ContactType[];
}
const ContactList = ({setContactdetails,contacts}:contactlistprops) => {
    const handleClick=(key:ContactType)=>{
        setContactdetails(key);}
  return (
    <div>
        {contacts.map((contact,index)=>(
            <div onClick={()=>handleClick(contact)} className='contacts' key={index}>
                <img src={contact.imageUrl} alt={`${contact.name}'s avatar`}/>
                <div>{contact.name}</div>
            </div>
        ))}
    </div>
  )
}

export default ContactList