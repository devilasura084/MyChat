

interface MainChatTitleprops{
    contactname:string;
    contactimg:string;
    contactcolor:string
}
const MainChatTitle = ({contactname,contactimg,contactcolor}:MainChatTitleprops) => {
  const luminasence=(contactcolor:string)=>{
    let r = parseInt(contactcolor.substring(0, 2), 16);
    let g = parseInt(contactcolor.substring(2, 4), 16);
    let b = parseInt(contactcolor.substring(4, 6), 16);
    const newr=r/255;
    const newg=g/255;
    const newb=b/255;
    const lum=0.2126*newr+0.7152*newg+0.0722*newb;
    console.log(lum)
    return lum;
  }
  return (
    <div style={{backgroundColor:`#${contactcolor}`,color:`${luminasence(contactcolor)>0.6?"black":"white"}`}} className="flex items-center gap-2  h-1/6  border-2 rounded-md"><img className="w-20 h-20 rounded-full ml-4 " src={contactimg} alt={`${contactname}'s image `} />
    <div >
      {contactname}
    </div>
    </div>
  )
}

export default MainChatTitle