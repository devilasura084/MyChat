import React, { useState } from 'react'
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../types/hook';
import { setUserDetails} from '../types/userslice';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
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
    const dispatch = useAppDispatch();
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
                const response=await axios.post('http://localhost:5000/auth/Sign-in',userdata);
                setErrorMessage('');
                const {token,email,username,contactlist,imageUrl}=response.data;
                const user={
                    email:email,
                    name:username,
                    imageUrl:imageUrl,
                    contactlist:contactlist
                }
                console.log(user);
                dispatch(setUserDetails(user))
                if(token){
                    console.log(token);
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
    <div className='flex justify-center mt-40 mb-40' >
        <form className='flex w-80 flex-col gap-2 border p-10 rounded-md bg-white ' onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: 'red',margin:0,padding:0}}>{errorMessage}</p>}
            <Input type='email' placeholder='Email' onChange={(e)=>{
                setuserdata({...userdata,email:e.target.value});
            }} />
            <div  className="h-10 w-full relative">
            <input placeholder='Password' className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 '  type={showpassword?"text":"password"}
            onChange={(e)=>{
                setuserdata({...userdata,password:e.target.value});
            }}/>
            <img className='absolute right-2 bottom-2 w-5' onClick={handleEye} src={showpassword?'close-eye.svg':'eye.svg'} alt="EYE"  />
            </div>
            <Button>Sign in</Button>
            <span>Don't have an account?<a href="/sign-up" className='text-orange-500'>Register</a></span>
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default Signin