
import ContactList from './ContactList'
import {contactlist} from '../Demodata'
interface UserDataType{
  name:string
  imageUrl:string
}
interface ChatsidebarProps {
  userdata: UserDataType;
  setPosition: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Chatsidebar = ({ userdata, setPosition }:ChatsidebarProps) => {
  return (
    <div className='chatsidebar'>
        <div className='user-logo'>
          <img src={userdata.imageUrl} alt={`${userdata.name}'s avatar`} />
          <div>{userdata.name}</div>
        </div>
        <div className='search-box'>
          <img src="Search.svg" alt="search icon" />
          <input type="text" />
        </div>
        <ContactList
        setPosition={setPosition}
        contacts={contactlist}
        />
    </div>
  )
}

export default Chatsidebar