
import ContactList from './ContactList'
import { useAppSelector } from '../types/hook'
import { ContactType } from '../types/types'
import Addaccount from '../services/Addaccount';
interface ChatsidebarProps {
  contactlist:ContactType[]
  setContactdetails: React.Dispatch<React.SetStateAction<ContactType | undefined>>;
}

const Chatsidebar = ({ setContactdetails }:ChatsidebarProps) => {
  const user=useAppSelector(state=>state.user);
  return (
    <div className='chatsidebar'>
        <div className='user-logo'>
          <img className='avatar' src={user.imageUrl} alt={`${user.name}'s avatar`} />
          <div>{user.name}</div>
          <div className="icons">
          <Addaccount/>
          <img src="/moreoption.svg" alt="moreoption" />
          </div>
        </div>
        <div className='search-box'>
          <img src="Search.svg" alt="search icon" />
          <input type="text" />
        </div>
        <ContactList
        setContactdetails={setContactdetails}
        contacts={user.contactlist}
        />
    </div>
  )
}

export default Chatsidebar