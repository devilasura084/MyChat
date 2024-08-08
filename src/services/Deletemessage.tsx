import { useAppDispatch, useAppSelector } from '@/types/hook';
import { deleteMessage } from '@/types/userslice';
import { Socket } from 'socket.io-client';
interface Deletemessageprops{
    index:number,
    email:string,
    socket:Socket|null
}
const Deletemessage = ({index,email,socket}:Deletemessageprops) => {
    const user=useAppSelector(state=>state.user);
    const dispatch=useAppDispatch();
    const luminasence=(contactcolor:string)=>{
        let r = parseInt(contactcolor.substring(0, 2), 16);
        let g = parseInt(contactcolor.substring(2, 4), 16);
        let b = parseInt(contactcolor.substring(4, 6), 16);
        const newr=r/255;
        const newg=g/255;
        const newb=b/255;
        const lum=0.2126*newr+0.7152*newg+0.0722*newb;
        return lum>0.6?'black':'white';
      }
    const deletemessage=()=>{
        if(!socket)return;
        const data={
            contactEmail:email,
            messageIndex:index
        }
        dispatch(deleteMessage(data))
    }
  return (
    <svg onClick={deletemessage} className='w-3 h-3 cursor-pointer' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill={luminasence(user.backgroundcolor)}><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
  )
}

export default Deletemessage