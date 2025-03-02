import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRated: null,
    upcomingMovies: null,
    trailerOfSelectedMovie: null,
    selectedMovieId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerOfSelectedMovie: (state, action) => {
      state.trailerOfSelectedMovie = action.payload;
    },
    removeTrailerOfSelectedMovie: (state, action) => {
      return null;
    },
    removeTrailerVideo: (state) => {
      state.trailerVideo = null;
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovieId = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRated,
  addUpcomingMovies,
  addTrailerOfSelectedMovie,
  removeTrailerOfSelectedMovie,
  removeTrailerVideo,
  addSelectedMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
