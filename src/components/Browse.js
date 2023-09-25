import React, { useEffect, useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Logo from "./NetflixLogoAnimation/Logo";

const Browse = () => {
  const isGptSearch = useSelector((store) => store.gpt.isGptSearch);
  const [isLogo, setIsLogo] = useState(true)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  const logoAnimate = () => {
    setTimeout(() => {
      setIsLogo(false)
    },6000)
  }
  useEffect(() => {
    logoAnimate()
  },[])
  return (
    <div>
      {
        isLogo ? <Logo /> :
        <>
        <Header />
      {isGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}</>
      }
      
    </div>
  );
};

export default Browse;
