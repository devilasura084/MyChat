import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Home from './components/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Contact from './pages/Contact'
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
