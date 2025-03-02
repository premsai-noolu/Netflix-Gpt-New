import React from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { removeTrailerVideo } from "../utils/movieSlice";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  const handleMovieClick = (movieId) => {
    console.log("handleMovieClick =>", handleMovieClick);
    dispatch(removeTrailerVideo(null));
  };
  if (!movies) return;
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                movie={movie}
                posterPath={movie.poster_path}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
