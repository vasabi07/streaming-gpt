import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContent from "./MainContent";
import SecondaryContent from "./SecondaryContent";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  useNowPlayingMovies();
  const gptSearch = useSelector(store=>store.gpt.toggleGptSearch) 
  return (
    <div>
      <Header />
      {gptSearch ? <GptSearch/>: <><MainContent/>
      <SecondaryContent/></>}
      
    </div>
  );
};

export default Browse;
