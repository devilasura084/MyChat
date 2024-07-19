interface contacts{
    name:string,
    email:string,
    imageUrl:string
}
interface contactlistprops{
    setContactdetails: React.Dispatch<React.SetStateAction<contacts| undefined>>;
    contacts:contacts[];
}
const ContactList = ({setContactdetails,contacts}:contactlistprops) => {
    const handleClick=(key:contacts)=>{
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