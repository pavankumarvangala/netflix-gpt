import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black px-8">
      <div className="-mt-60 z-20 relative text-white">
        <MoviesList title={"Trending"} movies={movies.nowPlayingMovies} />
      </div>
      <MoviesList title={"Popular"} movies={movies.popularMovies} />
      <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MoviesList title={"UpComing"} movies={movies.upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
