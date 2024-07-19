import { useState } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
type HomeProps = {
  delay: number;
};

const Home = ({delay}:HomeProps) => {
  const [loading, setLoading] = useState(true);
  if(loading)
  {
    return (<Loading
    delay={delay}
    setLoading={setLoading}
    />)
  }
  return (
      <div>
        <Navbar/>
      <p className='Home-text'>
          Start chatting with anyone at anytime with <span>MyChat</span>
        </p>
        <a className='start-chatting-button' href="/chat">
        start chatting now {`->`}
        </a>
        <Footer/>
        </div>
  )
}

export default Home