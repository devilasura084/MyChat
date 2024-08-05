
import ContactList from './ContactList'
import { useAppSelector } from '../types/hook'
import { ContactType } from '../types/types'
import Addaccount from '../services/Addaccount';
import Dotteddropdown from './Dotteddropdown';
interface ChatsidebarProps {
  contactlist:ContactType[]
  setContactdetails: React.Dispatch<React.SetStateAction<ContactType | undefined>>;
}

const Chatsidebar = ({ setContactdetails }:ChatsidebarProps) => {
  const user=useAppSelector(state=>state.user);
  const luminasence=(contactcolor:string)=>{
    let r = parseInt(contactcolor.substring(0, 2), 16);
    let g = parseInt(contactcolor.substring(2, 4), 16);
    let b = parseInt(contactcolor.substring(4, 6), 16);
    const newr=r/255;
    const newg=g/255;
    const newb=b/255;
    const lum=0.2126*newr+0.7152*newg+0.0722*newb;
    return lum;
  }
  const color=luminasence(user.backgroundcolor)>0.6?"#000000":"#ffffff";
  return (
    <div className='bg-white border h-screen w-1/4 flex flex-col rounded-md '>
      <div style={{backgroundColor:`#${user.backgroundcolor}`}} >
        <div  className='flex items-center ml-4 mt-8'>
          <div style={{color:color}} className='flex items-center gap-1'>
          <img className='rounded-full h-[10svw] w-[10svw]' src={user.imageUrl} alt={`${user.name}'s avatar`} />
          <div className='text-wrap break-words max-w-[40%]'>{user.name}</div>
          </div>
          <div className='ml-auto flex gap-2 '>
          <Addaccount
          color={color}
          />
          <Dotteddropdown
          color={color}
          />
          </div>
        </div>
        <div className='w-[90%]  ml-auto mr-auto relative h-8 flex items-center mt-2 mb-5'>
        <svg className='absolute right-0 mr-2' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color}><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          <input className='w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-full' type="text" />
        </div>
        </div>
        <ContactList
        setContactdetails={setContactdetails}
        contacts={user.contactlist}
        />
    </div>
  )
}

export default Chatsidebar