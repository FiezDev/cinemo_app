import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import { RootState } from "./index";
import MovieService from "../service/moviesService";

export const movieActions = moviesSlice.actions;
export const fetchMovies =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
      const response = await MovieService.getMovies();
      const movies = response;
      dispatch(movieActions.setMovies(movies));
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };
