import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieModel } from "../models";

interface MoviesState {
  movies: MovieModel[];
}

const initialState: MoviesState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<MovieModel[]>) {
      state.movies = action.payload;
    },
  },
});

export default movieSlice;
