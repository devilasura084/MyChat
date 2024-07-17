import React from 'react'
import ContactList from './ContactList'
import {contactlist} from '../Demodata'
interface UserDataType{
  name:string
  imageUrl:string
}
interface UserDataTypeProps{
  userdata:UserDataType;
}

const Chatsidebar = (userdata:UserDataTypeProps) => {
  return (
    <div className='chatsidebar'>
        <div className='user-logo'>
          <img src={userdata.userdata.imageUrl} alt={`${userdata.userdata.name}'s avatar`} />
          <div>{userdata.userdata.name}</div>
        </div>
        <div className='search-box'>
          <img src="Search.svg" alt="search icon" />
          <input type="text" />
        </div>
        <ContactList
        contacts={contactlist}
        />
    </div>
  )
}

export default Chatsidebar