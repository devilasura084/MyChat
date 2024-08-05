
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
interface Deleteaccountprops{
    email:string,
    setContactdetails:React.Dispatch<React.SetStateAction<ContactType| undefined>>;
}
import { useAppDispatch, useAppSelector } from "@/types/hook"
import axios from "axios";
import { removeContact } from "@/types/userslice";
import { ContactType } from "@/types/types";
const Deleteaccount = ({email,setContactdetails}:Deleteaccountprops) => {
    const user=useAppSelector(state=>state.user);
    const dispatch=useAppDispatch();
    const handleDelete=async()=>{
        const data={
            useremail:user.email,
            receiveremail:email
        }
        try {
            const reponse=await axios.post(`http://localhost:5000/contact/deleteaccount`,data)
            console.log(reponse)
            dispatch(removeContact(email))
            setContactdetails(undefined);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Popover >
             <PopoverTrigger className="ml-auto mr-4">
            <img  src="delete.svg" alt="delete" /></PopoverTrigger>
             <PopoverContent className="flex flex-col w-40 text-center gap-2">
                Are you Sure?
                <div onClick={handleDelete} className="w-20 ml-auto mr-auto cursor-pointer bg-primary text-white p-1 rounded-md hover:bg-orange-400">Yes</div>
             </PopoverContent>
    </Popover>
    
  )
}

export default Deleteaccount