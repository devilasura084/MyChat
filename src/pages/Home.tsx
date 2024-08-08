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
      <p className='text-5xl max-w-xl ml-40 mt-20'>
          Start chatting with anyone at anytime with <span className="text-orange-500">MyChat</span>
        </p>
        <a  href="/chat">
        <button className="w-44 h-16 bg-orange-500 rounded-lg text-white hover:bg-orange-400 text-l ml-40 mt-5 indent-1 font-semibold transition-all">
              start chatting now
            </button>
        </a>
        <Footer/>
        </div>
  )
}

export default Home