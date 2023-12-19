import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieModel } from "../models";

interface MoviesState {
  movies: MovieModel[];
  favorites: number[];
}

const initialState: MoviesState = {
  movies: [],
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<MovieModel[]>) {
      state.movies = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const movieId = action.payload;
      if (state.favorites.includes(movieId)) {
        state.favorites = state.favorites.filter((id) => id !== movieId);
      } else {
        state.favorites.push(movieId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { setMovies, toggleFavorite } = movieSlice.actions;

export default movieSlice;
