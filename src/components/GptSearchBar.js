import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder="What would you like to watch today?
          "
          className="col-span-9 p-4 m-4"
        />
        <button className="col-span-3 bg-red-600 m-4 py-2 px-4 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
