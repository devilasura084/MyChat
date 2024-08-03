import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
interface Deleteaccountprops{
    email:string,
}
import { useAppDispatch, useAppSelector } from "@/types/hook"
import axios from "axios";
import { removeContact } from "@/types/userslice";
const Deleteaccount = ({email}:Deleteaccountprops) => {
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
                <Button onClick={handleDelete} className="w-20 ml-auto mr-auto">Yes</Button>
             </PopoverContent>
    </Popover>
    
  )
}

export default Deleteaccount