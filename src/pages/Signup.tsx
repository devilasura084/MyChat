import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';

interface signupformelements{
    name ?:string,
    email ?:string,
    password?:string,
    confirmpassword?:string
}
const Signup = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500); 
    }, []);
    const [userdata,setuserdata]=useState<signupformelements>({});
    const [showpassword,setshowpassword]=useState(false);
    const handleEye=(e:React.MouseEvent<HTMLImageElement>)=>{
        e.preventDefault();
        setshowpassword(!showpassword);
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(userdata.name===undefined ||userdata.name?.trim()==="")
            {alert("Name cannot be empty");
                return
            }
        if(userdata.email===undefined ||userdata.email?.trim()==="")
           { alert("email cannot be empty");
            return
           }
        if(userdata.password===undefined ||userdata.password?.trim()==="")
            {alert("password cannot be empty");
                return
            }
        if(userdata.confirmpassword===undefined ||userdata.confirmpassword?.trim()==="")
            {alert("confirmpassword cannot be empty");
                return
            }
        if(userdata.password !== userdata.confirmpassword )
           {alert("password and confirmpassword do not match")
            return
           }
        if(userdata.name !== undefined && userdata.name.length <3 )
        {
            alert("name too short must contain more than three characters")
            return
        }
        if(userdata.email!== undefined && !userdata.email.includes("@") && !userdata.email.includes('.')){
            alert("email not correct")
            return
        }
        if(userdata.password!==undefined && userdata.password.length<8)
            {alert('password needs to have 8 character');
                return
            }
        console.log(userdata)
    }
  return (
    <>
    {loading?(<Loading/>):(<div>
        <form className='Signup' onSubmit={handleSubmit}>
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
    </div>)}
    </>
  )
}

export default Signup