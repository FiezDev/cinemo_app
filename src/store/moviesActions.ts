import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import { RootState } from "./index";
import { MovieModel } from "../models";
import MovieService from "../service/moviesService";

export const movieActions = moviesSlice.actions;
export const fetchMovies =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
      const movies: MovieModel[] = await MovieService.getMovies();
      dispatch(movieActions.setMovies(movies));
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      // Handle the error state appropriately, e.g., by dispatching a failure action
    }
  };
