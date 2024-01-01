import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useMovieTrailer = (id) => {
    const mainVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          OPTIONS
        );
        const json = await data.json();
        const trailers = json.results.filter((video) => video.type === "Trailer");
        const preferredTrailer = trailers[1];
      };
      useEffect(() => {
        mainVideo();
      }, []);
}

export default useMovieTrailer