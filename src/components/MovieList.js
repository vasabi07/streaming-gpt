import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({title,movies}) => {
    if (!movies || movies.length === 0) {
        return null; // or some fallback UI if movies are empty or undefined
      }
    // const moviePoster = MOVIE_CDN_URL+movies[0]?.poster_path 
console.log(movies[0].poster_path);

  return (
  <div className='p-4'>
    <h1 className='pb-2'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies.map(movie=> <MovieCard posterPath={movie.poster_path} />)}
        </div>   
    </div>
  </div>
  )
}

export default MovieList