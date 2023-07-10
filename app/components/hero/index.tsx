import { Search } from "./search"
import { Subtitle } from "./subtitle"
import { Title } from "./title"

const Hero = () => {
  return (
    <div className="mt-20">
      <Title />
      <Subtitle />
      <Search />
    </div>
  )
}

export { Hero }