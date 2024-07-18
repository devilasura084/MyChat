

interface contacts{
    name:string,
    email:string,
    imageUrl:string
}
interface contactlistprops{
    setPosition: React.Dispatch<React.SetStateAction<number | undefined>>;
    contacts:contacts[];
}
const ContactList = ({setPosition,contacts}:contactlistprops) => {
    const handleClick=(key:number|undefined)=>{
    setPosition(key);}
  return (
    <div>
        {contacts.map((contact,index)=>(
            <div onClick={()=>handleClick(index)} className='contacts' key={index}>
                <img src={contact.imageUrl} alt={`${contact.name}'s avatar`}/>
                <div>{contact.name}</div>
            </div>
        ))}
    </div>
  )
}

export default ContactList