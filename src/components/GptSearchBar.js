import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies, addTmdbResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const currlang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearch = async () => {
    console.log(searchInput.current.value);

    const gptQuery =
      "Act as a movie recommendation system and give me 5 movies for this text" +
      searchInput.current.value +
      "with a comma separated as like this (example: rrr,bahubali,kalki,gamechanger,devara). Dont give any other content just give me 5 movies";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o-mini",
    });
    console.log(gptResults.choices[0].message.content);

    const gptMovies = gptResults.choices[0].message.content.split(",");
    dispatch(addGptMovies(gptMovies));
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const TMDBResults = await Promise.all(promiseArray);
    dispatch(addTmdbResults(TMDBResults));
    console.log(TMDBResults);
  };
  console.log(currlang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInput}
          type="text"
          placeholder={lang[currlang].getSearchPlaceholder}
          className="col-span-9 p-4 m-4"
        />
        <button
          className="col-span-3 bg-red-600 m-4 py-2 px-4 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[currlang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
