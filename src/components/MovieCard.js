import React from "react";
import { API_OPTIONS, IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addTrailerOfSelectedMovie,
  addTrailerVideo,
  removeTrailerVideo,
} from "../utils/movieSlice";

const MovieCard = ({ movie, movieId, posterPath, onClick }) => {
  // const dispatch = useDispatch();
  // const getTrailerOfSelectedMovie = () => {
  //   dispatch(addTrailerOfSelectedMovie(movie));
  // };
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  const dispatch = useDispatch();
  const handleMovieClick = (movieId) => {
    console.log("handleMovieClick =>", handleMovieClick);
    dispatch(removeTrailerVideo(null));
    getMovieVideos(movieId);
  };

  if (!posterPath) return;
  return (
    <div
      className="pr-4 w-36 md:w-48 cursor-pointer"
      onClick={() => handleMovieClick(movieId)}
    >
      <img
        className=""
        alt="movie card"
        src={IMG_CDN + posterPath}
        // onClick={getTrailerOfSelectedMovie(movie)}
      />
    </div>
  );
};

export default MovieCard;
