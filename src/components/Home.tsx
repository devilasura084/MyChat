import { useEffect, useState } from "react";
import Loading from "./Loading";


const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  }, []);
  return (
    <div>
      {
        loading?(<Loading/>):(<><p className='Home-text'>
          Start chatting with anyone at anytime with <span>MyChat</span>
        </p>
        <a className='start-chatting-button' href="/chat">
        start chatting now {`->`}
        </a></>)
      }
      
    </div>
  )
}

export default Home