import { useEffect } from "react";

interface Loadingprops{
  delay:number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const Loading = ({delay,setLoading}:Loadingprops) => {
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, delay); 
  }, []);
  return (<>
    <div className="flex">
    <div className=" ml-auto mr-auto mt-96 w-16 h-16 border-4 border-t-orange-500 border-gray-200 rounded-full animate-spin">.</div>
  </div>
    
    </>
  )
}

export default Loading