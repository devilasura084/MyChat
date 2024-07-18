import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Chat from './pages/Chat'
import Footer from './components/Footer'

function App() {
  const Loadingdelay=150;
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/sign-up' element={<Signup
          delay={Loadingdelay}
          />}/>
          <Route path='/' element={<Home
          delay={Loadingdelay}
          />}/>
          <Route path='/sign-in' element={<Signin
          delay={Loadingdelay}
          />}/>
          <Route path='/about' element={<About
          delay={Loadingdelay}
          />}/>
          <Route path='/contact' element={<Contact
          delay={Loadingdelay}
          />}/>
          <Route path='/chat' element={<Chat
          delay={Loadingdelay}
          />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
