import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContent = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const {original_title,overview,id} = movies[0];
  return (
    <div>
    <VideoTitle title ={original_title} overview ={overview}/>
    <VideoBackground id={id}/>
    </div>
  )
}

export default MainContent