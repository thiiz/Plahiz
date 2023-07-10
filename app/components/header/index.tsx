import { Logo } from "../logo"
import { Link } from "./nav-link"

const Header = () => {
  return (
    <header className="py-5 flex justify-between items-center">
      <Logo />
      <div className="flex justify-center items-center gap-x-12 bg-grey-900">
        <Link to="/" text="filmes" />
        <Link to="sobre" text="sobre" />
        <Link to="contato" text="contato" />
      </div>
    </header>
  )
}

export { Header }