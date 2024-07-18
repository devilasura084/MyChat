import { Suspense } from "react";
import Loading from "../components/Loading";


const Contact = () => {
  return (
    <Suspense fallback={<Loading/>}>
      Contact
    </Suspense>
  )
}

export default Contact