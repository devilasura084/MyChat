

const Footer = () => {
  return (
    <div className="mb-10 mt-40">
    <div className="flex flex-col" >
        <p className="text-3xl max-w-l m-auto" >
            Ready to start chatting with your friends and loved ones with <span className="text-orange-500">MyChat</span>
        </p>
        <a className="m-auto mt-2"  href="/chat">
        <button  className="w-44 h-16 bg-orange-500 rounded-lg text-white hover:bg-orange-400 text-l  mt-5 indent-1 font-semibold transition-all" >
              start chatting now 
            </button>
        </a>
        <div className='flex gap-5 ml-auto mr-10 mt-10'>
            <a href="/">
            <img className="w-10" src="facebook.svg" alt="facebook" />
            </a>
            <a href="/">
            <img className="w-10" src="instagram.svg" alt="facebook" />
            </a>
            <a href="/">
            <img className="w-10" src="github.svg" alt="facebook" />
            </a>
            <a href="/">
            <img className="w-10" src="twitter.svg" alt="facebook" />
            </a>
        </div>
    </div>
    </div>
  )
}

export default Footer