import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContent = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies)
  const nowPlayingMovies = movies && movies.nowPlayingMovies;
  console.log(nowPlayingMovies);
  return (
    <div className=" bg-black text-white">
      <div className="relative z-20 -mt-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Recommendations"} movies={nowPlayingMovies} />
        <MovieList title={"English"} movies={nowPlayingMovies} />
        <MovieList title={"Tamil"} movies={nowPlayingMovies} />
        <MovieList title={"Series"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContent;
