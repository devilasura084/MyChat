import { Suspense } from "react";
import Loading from "./Loading";


const Home = () => {
  return (
      <Suspense fallback={<Loading/>}>
      <p className='Home-text'>
          Start chatting with anyone at anytime with <span>MyChat</span>
        </p>
        <a className='start-chatting-button' href="/chat">
        start chatting now {`->`}
        </a>
        </Suspense>
  )
}

export default Home