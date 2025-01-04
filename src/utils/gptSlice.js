import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      state.movieNames = action.payload;
    },
    addTmdbResults: (state, action) => {
      state.movieResults = action.payload;
    },
  },
});

export const { toggleGptSearch, addTmdbResults, addGptMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
