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
    <div className="loading-screen">
        <div className="spinner">
        </div>
    </div>
    Loading......
    </>
  )
}

export default Loading