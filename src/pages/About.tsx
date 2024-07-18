import { useEffect, useState } from "react";
import Loading from "../components/Loading";


const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  }, []);
  return (
    <>
    {loading?(<Loading/>):
    (<div>About</div>)}
    </>
  )
}

export default About