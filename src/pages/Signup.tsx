import React, { useState } from 'react'
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
            Navigate('/sign-in');
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
    <div>
        <form className='Signup' onSubmit={handleSubmit}>
            {errorMessage && <p style={{ color: 'red',margin:0,padding:0 }}>{errorMessage}</p>}
            Username
            <input placeholder='Your username' className='form-item' type='text' onChange={(e)=>{
                setuserdata({...userdata,name:e.target.value});
            }} />
            Email
            <input placeholder='Your email' className='form-item' type="email" 
            onChange={(e)=>{
                setuserdata({...userdata,email:e.target.value});
            }}/>
            Password
            <div className='password-showpassword'>
            <input placeholder='password'  type={showpassword?"text":"password"}
            onChange={(e)=>{
                setuserdata({...userdata,password:e.target.value});
            }}/>
            <img className='password-eye' onClick={handleEye} src={showpassword?'close-eye.svg':'eye.svg'} alt="EYE" style={{width:20}} />
            </div>
            Confirm password
            <input placeholder='Confirm password' className='form-item' type="password"
            onChange={(e)=>{
                setuserdata({...userdata,confirmpassword:e.target.value});
            }}/>
            <button className='submit-button' type="submit">Sign Up</button>
            <span>Already have an account?<a href="/sign-in">Login</a></span>
        </form>
    </div>
  )
}

export default Signup