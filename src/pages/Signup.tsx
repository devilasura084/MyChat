import React, { useState } from 'react'
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
type SignupProps = {
    delay: number;
  };
interface signupformelements{
    name ?:string,
    email ?:string,
    password?:string,
    confirmpassword?:string
}
const Signup = ({delay}:SignupProps) => {
    const Navigate=useNavigate()
    const [userdata,setuserdata]=useState<signupformelements>({});
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
    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const {name,email,password,confirmpassword}:signupformelements=userdata;
        if(name===undefined ||name?.trim()==="")
            {setErrorMessage("Name cannot be empty");
                return
            }
        if(email===undefined ||email?.trim()==="")
           { setErrorMessage("email cannot be empty");
            return
           }
        if(password===undefined ||password?.trim()==="")
            {setErrorMessage("password cannot be empty");
                return
            }
        if(confirmpassword===undefined ||confirmpassword?.trim()==="")
            {setErrorMessage("confirmpassword cannot be empty");
                return
            }
        if(password !== confirmpassword )
           {setErrorMessage("password and confirmpassword do not match")
            return
           }
        if(name !== undefined && name.length <3 )
        {
            setErrorMessage("name too short must contain more than three characters")
            return
        }
        if(email!== undefined && !email.includes("@") && !email.includes('.')){
            setErrorMessage("email not correct")
            return
        }
        if(password!==undefined && password.length<8)
            {setErrorMessage('password needs to have 8 character');
                return
            }
        const user={
            name:name,
            email:email,
            password:password,
        }
        try {
             await axios.post('http://localhost:5000/auth/Sign-up',user);
            setErrorMessage('');
            console.log('data sent');
            localStorage.setItem('email',user.email);
            Navigate('/profilepicture');
        } catch (error:any) {
            if(error.response && error.response.status==400)
                {setErrorMessage(error.response.data.message);
                console.log(error.response.data.message);}
            else{
                setErrorMessage("unexpected error occurred");
            }
            return;
        }
        
    }
  return (
    <>
    <Navbar/>
    <div className='flex justify-center mt-40 mb-40'>
        <form className='flex w-80 flex-col gap-2 p-10 border rounded-md bg-white ' onSubmit={handleSubmit}>
        {errorMessage && <p className="text-red-700 text-xs m-0 p-0">{errorMessage}</p>}
            <Input type='text' placeholder='Username' onChange={(e)=>{
                setuserdata({...userdata,name:e.target.value});
            }}/>
            <Input type='email' placeholder='Email' onChange={(e)=>{
                setuserdata({...userdata,email:e.target.value});
            }}/>
            <div  className="h-10 w-full relative">
            <input placeholder='Password' className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 '  type={showpassword?"text":"password"}
            onChange={(e)=>{
                setuserdata({...userdata,password:e.target.value});
            }}/>
            <img className='absolute right-2 bottom-2 w-5' onClick={handleEye} src={showpassword?'close-eye.svg':'eye.svg'} alt="EYE"  />
            </div>
            <Input type='password' placeholder='Confirm password' onChange={(e)=>{
                setuserdata({...userdata,confirmpassword:e.target.value});
            }}/>
            <Button>Sign up</Button>
            <span>Already have an account?<a className='text-orange-500' href="/sign-in">Login</a></span>
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default Signup