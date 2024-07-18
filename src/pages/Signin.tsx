import React, { useState } from 'react'
import Loading from '../components/Loading';
type SigninProps = {
    delay: number;
  };
interface signinformelements{
    name ?:string,
    password?:string,
}
const Signin = ({delay}:SigninProps) => {
    const [userdata,setuserdata]=useState<signinformelements>({});
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
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(userdata.name===undefined ||userdata.name?.trim()==="")
            {alert("Name cannot be empty");
                return
            }
        if(userdata.password===undefined ||userdata.password?.trim()==="")
            {alert("password cannot be empty");
                return
            }
        if(userdata.name !== undefined && userdata.name.length <=3 )
        {
            alert("name too short!! must contain more than three characters")
            return
        }
        if(userdata.password!==undefined && userdata.password.length<8)
            {alert('password needs to have 8 character');
                return
            }
        console.log(userdata)
    }
  return (
    <div className='Main-form'>
        
        <form className='Signin' onSubmit={handleSubmit}>
            Username
            <input placeholder='Your username' className='form-item' type='text' onChange={(e)=>{
                setuserdata({...userdata,name:e.target.value});
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
  )
}

export default Signin