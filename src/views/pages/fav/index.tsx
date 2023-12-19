import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { fetchMovies } from "../../../store/moviesActions";
import { MovieCard } from "../../components/MovieCard";
import { Stack } from "@mui/material";
import { RootState } from "../../../store";

export default function Fav() {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const favorites = useSelector((state: RootState) => state.movies.favorites);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, movies.length]);

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <div className="w-full flex flex-row flex-grow">
      <Stack spacing={2} className="flex-1 ml-[1px] mt-[1px]">
        <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Stack>
    </div>
  );
}
