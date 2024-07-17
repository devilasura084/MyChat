
interface contacts{
    name:string,
    email:string,
    imageUrl:string
}
interface contactlistprops{
    contacts:contacts[];
}
const ContactList = ({contacts}:contactlistprops) => {
  return (
    <div>
        {contacts.map((contact,index)=>(
            <div className='contacts' key={index}>
                <img src={contact.imageUrl} alt={`${contact.name}'s avatar`}/>
                <div>{contact.name}</div>
            </div>
        ))}
    </div>
  )
}

export default ContactList