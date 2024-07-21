import React, { useState } from 'react'
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type SigninProps = {
    delay: number;
  };
interface signinformelements{
    email ?:string,
    password?:string,
}
const Signin = ({delay}:SigninProps) => {
    const Navigate=useNavigate()
    const [userdata,setuserdata]=useState<signinformelements>({});
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showpassword,setshowpassword]=useState(false);
    const [loading, setLoading] = useState(true);
    if(loading)
    {
      return (<Loading
      delay={delay}
      setLoading={setLoading}
      />)
    }
    const handleEye=(e:React.MouseEvent<HTMLImageElement>)=>{
        e.preventDefault();
        setshowpassword(!showpassword);
    }
    const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const {email,password}=userdata;
        if(email===undefined ||email?.trim()==="")
            {setErrorMessage("email cannot be empty");
                return
            }
        if(password===undefined ||password?.trim()==="")
            {setErrorMessage("password cannot be empty");
                return
            }
        if(email !== undefined && !email.includes('@') )
        {
            setErrorMessage("Email doesnt contain @")
            return
        }
        if(email !== undefined && !email.includes('.') )
            {
                setErrorMessage("Email doesnt contain .")
                return
            }
        if(password!==undefined && password.length<8)
            {setErrorMessage('password needs to have 8 character');
                return
            }
            try{
                const response=await axios.post('http://localhost:5000/api/Sign-in',userdata);
                setErrorMessage('');
                const {token}=response.data;
                if(token){
                    localStorage.setItem('token',token);
                    Navigate('/chat')
                }
                else {
                    setErrorMessage('Login failed')
                }
            }
            catch(err:any){
                if(err.response && err.response.status===400)
                    setErrorMessage(err.response.data.message);
                else
                {
                    setErrorMessage("unforeseen error has occured")
                }
            }
        
    }
  return (
    <>
    <Navbar/>
    <div className='Main-form'>
        
        <form className='Signin' onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: 'red',margin:0,padding:0}}>{errorMessage}</p>}
            Email
            <input placeholder='your email' className='form-item' type='email' onChange={(e)=>{
                setuserdata({...userdata,email:e.target.value});
            }} />
            Password
            <div className='password-showpassword'>
            <input placeholder='password'  type={showpassword?"text":"password"}
            onChange={(e)=>{
                setuserdata({...userdata,password:e.target.value});
            }}/>
            <img className='password-eye' onClick={handleEye} src={showpassword?'close-eye.svg':'eye.svg'} alt="EYE" style={{width:20}} />
            </div>
            <button className='submit-button' type="submit">Sign In</button>
            <span>Don't have an account?<a href="/sign-up">Register</a></span>
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default Signin