import type { WindowProps } from "~/@types/window"
import type { ContentProps } from "~/@types/content";
import { CardMovie } from "./card";
import { useEffect, useState } from "react";

const CardsMovies = ({ window: currWindow }: { window: WindowProps }) => {
  const [content, setContent] = useState<ContentProps | null>(null)

  const handleChangeWindow = async ({ currWindow }: { currWindow: WindowProps }) => {
    const authorizationToken = window.ENV.TMDB_JWT_AUTHORIZATION_TOKEN
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authorizationToken}`
      }
    };

    if (currWindow === "todos") {
      const movieUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-br&page=1&sort_by=vote_count.desc';
      const tvUrl = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=vote_count.desc';

      const [movieResponse, tvResponse] = await Promise.all([
        fetch(movieUrl, options),
        fetch(tvUrl, options)
      ]);

      const [movieData, tvData] = await Promise.all([
        movieResponse.json(),
        tvResponse.json()
      ]);

      tvData.results.forEach((result: any) => {
        if (result.name) {
          result.title = result.name;
          delete result.name;
        }
      });

      const totalPages = movieData.total_pages + tvData.total_pages;
      const totalResults = movieData.total_results + tvData.total_results;

      const content: ContentProps | any = {
        page: 1,
        results: [...movieData.results, ...tvData.results].sort((a, b) => b.vote_average - a.vote_average),
        total_pages: totalPages,
        total_results: totalResults
      };
      return setContent(content);
    }

    if (currWindow === "filmes") {
      const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-br&page=1&sort_by=vote_count.desc';
      const content = (await fetch(url, options))
      const data = await content.json();
      return setContent(data)
    }

    if (currWindow === "series") {
      const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=vote_count.desc';
      const content = (await fetch(url, options))
      const data = await content.json();
      data.results.forEach((result: any) => {
        if (result.name) {
          result.title = result.name;
          delete result.name;
        }
      });
      return setContent(data)
    }

  }

  useEffect(() => {
    handleChangeWindow({ currWindow })
  }, [currWindow])

  return (
    <>
      <div className="mt-6 flex items-baseline gap-x-1.5 text-grey-400 -tracking-wider">
        <span className="text-4xl font-semibold capitalize">{currWindow}</span>
        <span className="text-lg">({content?.total_results})</span>
      </div>

      <div className="flex justify-center items-center w-full mb-12">
        <div className="flex flex-wrap items-center">
          {content?.results.map((content) => {
            return (
              <div key={content.id} className="p-4">
                <CardMovie title={content.title} grade={content?.vote_average} img={content.poster_path} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export { CardsMovies }