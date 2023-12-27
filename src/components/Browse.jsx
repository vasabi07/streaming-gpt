import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContent from "./MainContent";
import SecondaryContent from "./SecondaryContent";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <div>
      <Header />
      <MainContent/>
      </div>
      
      <SecondaryContent/>
    </div>
  );
};

export default Browse;
