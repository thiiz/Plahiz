import type { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>
}

const DefaultButton: React.FC<ButtonProps> = ({ text, isActive = false, onClick }) => {

  return <button onClick={onClick} className={`
  ${isActive ? "bg-primary-400" : 'bg-transparent'}
  py-2
  px-8
  rounded-lg
  capitalize
  font-semibold
  `}>
    {text}
  </button>
}

export {
  DefaultButton
}