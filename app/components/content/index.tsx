import { DefaultButton } from "../buttons"
import { CardsMovies } from "../card-movie";
import { useContent } from "./useContent";

const Content = () => {
  const {
    all,
    movies,
    series,
    window,
    handleChangeWindow
  } = useContent()

  return (
    <div className="mt-20 inline-block">

      <div className="rounded-lg inline-flex bg-black/20 p-2">
        <DefaultButton text={all} onClick={() => handleChangeWindow(all)} isActive={window === all} />
        <DefaultButton text={movies} onClick={() => handleChangeWindow(movies)} isActive={window === movies} />
        <DefaultButton text={series} onClick={() => handleChangeWindow(series)} isActive={window === series} />
      </div>


      <CardsMovies window={window} />
    </div>
  )

}
export { Content }