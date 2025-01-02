import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="pr-4 w-36">
      <img className="" alt="movie card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
