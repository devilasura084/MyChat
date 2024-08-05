
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { clearUserDetails } from '../types/userslice';
import { useAppDispatch } from '../types/hook';
const Navbar = () => {
  const [token,setToken]=useState<String|null>();
  const location=useLocation();
  const pathname=location.pathname;
  const dispatch=useAppDispatch()
  useEffect(()=>{
    setToken(localStorage.getItem('token'));
  },[])
  const deleteToken=()=>{
    localStorage.removeItem('token');
    dispatch(clearUserDetails);
    window.location.reload();
  }
  return (
    <div className='h-28 flex items-center bg-orange-500 rounded'>
        <a href="/">
        <img src="icon.svg" alt="icon" className='h-12 w-12 ml-10' />
        </a>
        <div className='ml-auto mr-10 flex gap-10 text-xl font-semibold'>
        <a className={pathname==="/about"?" text-white":"text-black"} href="/about">About</a>
        <a className={pathname==="/contact"?" text-white":"text-black"} href="/contact">Contact</a>
        {
        token?<div className='cursor-pointer' onClick={deleteToken}>Logout</div>:  
        <a className={pathname==="/sign-in"?" text-white":"text-black"} href="/sign-in">Login</a>}
        </div>
        
    </div>
  )
}

export default Navbar