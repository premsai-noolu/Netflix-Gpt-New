import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movie = useSelector((store) => store.movies);
  return (
    movie.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-60 relative z-30 pl-4 md:pl-12">
          <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movie.popularMovies} />
          <MovieList title={"Top Rated"} movies={movie.topRated} />
          <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondryContainer;
