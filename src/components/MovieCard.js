import React from 'react'
import { MOVIE_CDN_URL } from '../utils/constants';
const MovieCard = ({posterPath}) => {
    console.log(posterPath);
  return (
    <div className='w-36 mx-2'>
        <img alt='movie' src={MOVIE_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard