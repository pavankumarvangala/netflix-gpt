import React, { useEffect } from "react";
import Header from "./Header";
import { NOW_PLAYING_MOVIES } from "../utils/constants";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies(NOW_PLAYING_MOVIES);
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
