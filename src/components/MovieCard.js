import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="pr-4 w-36 md:w-48 cursor-pointer">
      <img className="" alt="movie card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
