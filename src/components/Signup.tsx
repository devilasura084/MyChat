import React, { useState } from 'react'

interface signupformelements{
    name ?:string,
    email ?:string,
    password?:string,
    confirmpassword?:string
}
const Signup = () => {
    const [userdata,setuserdata]=useState<signupformelements>({});
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
    <div>
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
            <div className='form-item'>
            <input  placeholder='password'  type={showpassword?"text":"password"}
            onChange={(e)=>{
                setuserdata({...userdata,password:e.target.value});
            }}/>
            <button onClick={handleEye}><img src={showpassword?'close-eye.svg':'eye.svg'} alt="EYE" style={{width:20}} /></button>
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