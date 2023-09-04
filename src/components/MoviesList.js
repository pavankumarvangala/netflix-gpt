import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-2 text-white">
      <h1 className="text-3xl py-3">{title}</h1>
      <div className="flex overflow-x-auto scroll-smooth">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
