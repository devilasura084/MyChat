import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import axios from "axios"
import { useState } from "react"
import { useAppSelector } from "@/types/hook"
import { useDispatch} from "react-redux"
import { addContact } from "@/types/userslice"
interface addaccountprops{
  color:string
}
const Addaccount = ({color}:addaccountprops) => {
    const [email,setemail]=useState('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [propermessage,setpropermessage]=useState('');
    const user=useAppSelector(state=>state.user);
    const dispatch=useDispatch();
    const handleaddaccount= async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setpropermessage('');
      if(!email || email.length===0)
      {
        setErrorMessage('Email cant be empty');
        return;
      }
      if(email===user.email)
      {
        setErrorMessage('You use your own email');
        return;
      }
      setErrorMessage('');
      const data={
        useremail:user.email,
        receivermail:email
      }
      try {
        const response=await axios.post('http://localhost:5000/contact/addaccount',data)
        setpropermessage(response.data.message);
        console.log(response.data)
        const {name,email,imageUrl,backgroundcolor}=response.data.contact;
        const data2={
          name:name,
          email:email,
          imageUrl:imageUrl,
          backgroundcolor:backgroundcolor,
          messages:[]
        }
        dispatch(addContact(data2));
        return;
      } catch (err:any) {
        if(err.response && err.response.status===400)
          setErrorMessage(err.response.data.message);
      else
        {
            setErrorMessage("unforeseen error has   occured")
        }
      }
    }
  return (
    <Sheet>
    <SheetTrigger ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color}><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></SheetTrigger>
    <SheetContent side='left'>
    <SheetHeader>
      <SheetTitle>Add an account</SheetTitle>
      <SheetDescription>
        Add an account to your contacts using their email
      </SheetDescription>
      </SheetHeader>
      <form onSubmit={handleaddaccount} className="mt-10 flex flex-col gap-2">
      {errorMessage && <p className="text-red-700 text-xs m-0 p-0">{errorMessage}</p>}
      {propermessage && <p className="text-green-600 text-xs m-0 p-0">{propermessage}</p>}
        <Input value={email} onChange={(e)=>{
          setemail(e.target.value)
        }} placeholder="Email"/>
        <Button type="submit" className="w-full">Add account</Button>
      </form>
    </SheetContent>
   </Sheet>
  )
}

export default Addaccount