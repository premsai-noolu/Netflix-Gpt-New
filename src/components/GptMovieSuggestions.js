import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  if (!movieResults) return null;

  return (
    <div className="bg-black m-5 bg-opacity-85">
      {movieNames.map(
        (movieName, index) =>
          movieResults[index].length > 0 && (
            <MovieList title={movieName} movies={movieResults[index]} />
          )
      )}
    </div>
  );
};

export default GptMovieSuggestions;
