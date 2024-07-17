import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <p className='Home-text'>
        Start chatting with anyone at anytime with <span>MyChat</span>
      </p>
      <a className='start-chatting-button' href="/chat">
      start chatting now {`->`}
      </a>
    </div>
  )
}

export default Home