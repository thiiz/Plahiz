import { NavLink } from "@remix-run/react";
interface linkProps {
  to: string;
  text: string;
}
const Link: React.FC<linkProps> = ({ to, text }) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
      `${isActive ? "text-grey-50" : "text-grey-200"} font-bold text-base capitalize tracking-wider`
    }>
      {text}
    </NavLink>
  )
}


export { Link }