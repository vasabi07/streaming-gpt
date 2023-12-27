import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  return (
    <div>
      <iframe
        className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/RDE6Uz73A7g?si=53loIRlVeFoR9Uqg"+"&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
