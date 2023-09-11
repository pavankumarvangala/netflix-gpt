import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="m-2">
      <img
        className="min-w-[160px] h-[200px]"
        alt="movie-thumbnail"
        src={IMG_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
