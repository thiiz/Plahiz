import { NavLink } from "@remix-run/react";
import { IconStar } from "../icons/star";

interface CardMovieProps {
  title: string;
  img: string;
  grade: number;
}

const CardMovie: React.FC<CardMovieProps> = ({
  title = " ",
  img = " ",
  grade = 0.0,
}) => {
  return (
    <NavLink to="#" className="relative block p-2 bg-grey-800/70 backdrop-blur-sm rounded-lg max-w-[21.325rem]">
      <div className="absolute ml-1 mt-2 flex items-center gap-x-1 p-2 bg-black/60 backdrop-blur-sm rounded-lg">
        <IconStar />
        <span className="text-warn-500">{grade}</span>
      </div>
      <div className="w-[20.325rem] h-[29.8rem]">
        <img className="w-full h-full rounded-lg" src={`https://image.tmdb.org/t/p/w500/${img}`} alt="" />
      </div>
      <div className="px-4">
        <span className="pt-4 pb-3 font-semibold hover:underline underline-offset-1 line-clamp-1">{title}</span>
      </div>
    </NavLink>
  )
}

export { CardMovie }