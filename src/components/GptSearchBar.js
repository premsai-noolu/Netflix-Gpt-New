import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const currlang = useSelector((store) => store.config.lang);
  console.log(currlang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[currlang].getSearchPlaceholder}
          className="col-span-9 p-4 m-4"
        />
        <button className="col-span-3 bg-red-600 m-4 py-2 px-4 text-white rounded-lg">
          {lang[currlang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
