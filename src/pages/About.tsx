import { useState } from "react";
import Loading from "../components/Loading";

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
      About
    </div>
  )
}

export default About