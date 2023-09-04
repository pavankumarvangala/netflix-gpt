import React, { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredMovies = json.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailerVideo = filteredMovies.length
      ? filteredMovies[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailerVideo));
    return trailerVideo;
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
