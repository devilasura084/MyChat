import { Suspense } from "react";
import Loading from "../components/Loading";


const About = () => {
  return (
    <Suspense fallback={<Loading/>}>
      About
    </Suspense>
  )
}

export default About