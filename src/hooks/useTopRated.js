import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const topRated = useSelector((store) => store.movies.topRated);
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    !topRated && getTopRated();
  });
};

export default useTopRated;
