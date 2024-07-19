
import ContactList from './ContactList'

interface UserDataType{
  name:string
  imageUrl:string
}
interface contacts{
  name:string,
  email:string,
  imageUrl:string
}
interface ChatsidebarProps {
  contactlist:contacts[]
  userdata: UserDataType;
  setContactdetails: React.Dispatch<React.SetStateAction<contacts | undefined>>;
}

const Chatsidebar = ({ contactlist,userdata, setContactdetails }:ChatsidebarProps) => {
  return (
    <div className='chatsidebar'>
        <div className='user-logo'>
          <img src={userdata.imageUrl} alt={`${userdata.name}'s avatar`} />
          <div>{userdata.name}</div>
          <div className="icons">
          <img src="/addaccount.svg" alt="addacc" />
          <img src="/moreoption.svg" alt="moreoption" />
          </div>
        </div>
        <div className='search-box'>
          <img src="Search.svg" alt="search icon" />
          <input type="text" />
        </div>
        <ContactList
        setContactdetails={setContactdetails}
        contacts={contactlist}
        />
    </div>
  )
}

export default Chatsidebar