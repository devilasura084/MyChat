import { BrowserRouter as Router,Route, Routes,Navigate } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Home from './components/Home'
import Signin from './components/Signin'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
