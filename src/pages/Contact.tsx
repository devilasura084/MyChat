import { useState } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
type ContactProps = {
  delay: number;
};

const Contact = ({delay}:ContactProps) => {
  const [loading, setLoading] = useState(true);
  if(loading)
  {
    return (<Loading
    delay={delay}
    setLoading={setLoading}
    />)
  }
  return (
    <>
    <Navbar/>
    <div>
      Contact
    </div>
    <Footer/>
    </>
  )
}

export default Contact