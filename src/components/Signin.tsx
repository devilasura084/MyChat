import React, { useEffect, useState } from 'react'
import Loading from './Loading';
interface signinformelements{
    name ?:string,
    password?:string,
}
const Signin = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500); 
    }, []);
    const [userdata,setuserdata]=useState<signinformelements>({});
    const [showpassword,setshowpassword]=useState(false);
    const handleEye=(e:React.MouseEvent<HTMLButtonElement>)=>{
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
    <>
    {loading?(<Loading/>):(<div className='Main-form'>
        
        <form className='Signin' onSubmit={handleSubmit}>
            Username
            <input placeholder='Your username' className='form-item' type='text' onChange={(e)=>{
                setuserdata({...userdata,name:e.target.value});
            }} />
            Password
            <div className='form-item'>
            <input placeholder='password'  type={showpassword?"text":"password"}
            onChange={(e)=>{
                setuserdata({...userdata,password:e.target.value});
            }}/>
            <button onClick={handleEye}><img src={showpassword?'close-eye.svg':'eye.svg'} alt="EYE" style={{width:20}} /></button>
            </div>
            <button className='submit-button' type="submit">Sign In</button>
            <span>Don't have an account?<a href="/sign-up">Register</a></span>
        </form>
    </div>)}
    </>
    
  )
}

export default Signin