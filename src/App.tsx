import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Contact from './pages/Contact'
import Chat from './pages/Chat'
import { useState } from 'react'
import ProfilePicture from './pages/ProfilePicture'
interface userdetailtype {
  email:string,
  name:string,
  contactlist:string[]
}
function App() {
  const Loadingdelay=150;
  const [userdetail,setuserdetail]=useState<userdetailtype>({
    email: 'default@example.com',
    name: 'Default Name',
    contactlist: []}
  );
  return (
    <>
      <Router>
        <Routes>
          <Route path='/sign-up' element={<Signup
          delay={Loadingdelay}
          />}/>
          <Route path='/' element={<Home
          delay={Loadingdelay}
          />}/>
          <Route path='/sign-in' element={<Signin
          delay={Loadingdelay}
          setuserdetail={setuserdetail}
          />}/>
          <Route path='/about' element={<About
          delay={Loadingdelay}
          />}/>
          <Route path='/contact' element={<Contact
          delay={Loadingdelay}
          />}/>
          <Route path='/chat' element={<Chat
          delay={Loadingdelay}
          userdetail={userdetail}
          />}/>
          <Route path='/profilepicture' element={<ProfilePicture
          delay={Loadingdelay}
          />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
