import { useRef } from "react"
import { SearchIcon } from "../icons/search"

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="relative max-w-[24rem]">
      <input ref={inputRef} placeholder="Search Movies or TV Shows" className="
      placeholder-grey-600
       outline outline-1 outline-grey-700 focus:outline-2 focus:outline-primary-700
       rounded-xl
       w-full
       py-5 pl-[3.25rem] pr-4
      bg-black/10"
      />
      <button onClick={handleInputFocus} className="block absolute top-1/2 -translate-y-1/2 px-4">
        <SearchIcon />
      </button>
    </div>
  )
}

export { Search }