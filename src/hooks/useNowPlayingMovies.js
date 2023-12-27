import { OPTIONS_NOWPLAYING } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const fetchingNowPlaying = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS_NOWPLAYING)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
      fetchingNowPlaying();
    },[])
}

export default useNowPlayingMovies