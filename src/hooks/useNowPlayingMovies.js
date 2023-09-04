import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = (url) => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    return json.results;
  };

  useEffect(() => {
    getNowPlayingMovies();
  });
};

export default useNowPlayingMovies;
