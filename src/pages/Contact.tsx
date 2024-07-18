import { useState } from "react";
import Loading from "../components/Loading";
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
    <div>
      Contact
    </div>
  )
}

export default Contact