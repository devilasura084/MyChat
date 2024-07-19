import { useState } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type AboutProps = {
  delay: number;
};

const About = ({delay}:AboutProps) => {
  const [loading, setLoading] = useState(true);
  if(loading)
  {
    return (<Loading
    delay={delay}
    setLoading={setLoading}
    />)
  }
  return (
    <div>
      <Navbar/>
      About
      <Footer/>
    </div>
  )
}

export default About