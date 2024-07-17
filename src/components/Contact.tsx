import { useEffect, useState } from "react";
import Loading from "./Loading";


const Contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  }, []);
  return (
    <>
    {loading?(<Loading/>):(<div>Contact</div>)}
    </>
  )
}

export default Contact