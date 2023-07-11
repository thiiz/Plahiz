import type { WindowProps } from "~/@types/window"
import { useSearchParams } from "@remix-run/react"
import { useState } from "react"

const useContent = () => {
  const all: WindowProps = "todos"
  const movies: WindowProps = "filmes"
  const series: WindowProps = "series"
  const intialState: WindowProps = all

  const [searchParams, setSearchParams] = useSearchParams();
  const windowParams = searchParams.get("w")

  const [window, setWindow] = useState<WindowProps>(windowParams as WindowProps | null || intialState)

  const handleChangeWindow = (window: WindowProps) => {
    setWindow(window)
    return setSearchParams({ w: window })
  }
  return {
    all,
    movies,
    series,
    window,
    handleChangeWindow
  }
}

export { useContent }