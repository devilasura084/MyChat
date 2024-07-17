
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const location=useLocation();
  const pathname=location.pathname;
  return (
    <div className='Navbar'>
        <a href="/">
        <img src="icon.svg" alt="icon" style={{width:40,margin:10}} />
        </a>
        <div className='Nav-items'>
        <a className={pathname==="/about"?"isActive":"isInActive"} href="/about">About</a>
        <a className={pathname==="/contact"?"isActive":"isInActive"} href="/contact">Contact</a>
        <a className={pathname==="/sign-in"?"isActive":"isInActive"} href="/sign-in">Login</a>
        </div>
        
    </div>
  )
}

export default Navbar