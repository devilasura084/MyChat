import { Button } from "./ui/button"
import { Input } from "./ui/input"


const MainChatBar = () => {
  return (
    <div className="flex w-full gap-2 p-1 items-center h-[8%]">
      <Input className="h-full border-2" type="text" placeholder="Type here...." />
      <Button className="h-full" type="submit">Send</Button>
    </div>
  )
}

export default MainChatBar