

const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <div className='Line'></div>
        <p className='Footer-text'>
            Ready to start chatting with your friends and loved one with <span>MyChat</span>
        </p>
        <a className='start-chatting-button' href="/chat">
        start chatting now {`->`}
        </a>
        <div className='links'>
            <a href="/">
            <img style={{width:30}} src="facebook.svg" alt="facebook" />
            </a>
            <a href="/">
            <img style={{width:30}} src="instagram.svg" alt="facebook" />
            </a>
            <a href="/">
            <img style={{width:30}} src="github.svg" alt="facebook" />
            </a>
            <a href="/">
            <img style={{width:30}} src="twitter.svg" alt="facebook" />
            </a>
        </div>
        
    </div>
    </>
  )
}

export default Footer