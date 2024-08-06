
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
             <PopoverTrigger className="mr-4">
             <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#646464"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></PopoverTrigger>
             <PopoverContent className="flex flex-col w-40 text-center gap-2">
                Are you Sure?
                <div onClick={handleDelete} className="w-20 ml-auto mr-auto cursor-pointer bg-primary text-white p-1 rounded-md hover:bg-orange-400">Yes</div>
             </PopoverContent>
    </Popover>
    
  )
}

export default Deleteaccount