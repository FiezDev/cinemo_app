import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../../store/moviesActions";
import { AppDispatch } from "../../../store";
import mock from "../../../models/mock.json";
import MovieCard from "../../components/MovieCard";
import { Divider, Stack } from "@mui/material";
import { MovieModel } from "../../../models";

export default function Movie() {
  const dispatch: AppDispatch = useDispatch();
  const movies = mock.movies;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title_en.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchQuery, movies]);

  const formatMovie = (movie: MovieModel) => ({
    ...movie,
    movieCode: movie.movieCode || ["default_code"],
    trailer_ivx_key: movie.trailer_ivx_key || "nokey",
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-row flex-grow">
      <div className="w-full xl-max:w-2/3 px-[20px] sm:px-12 md:px-18 lg:px-32 pt-[72px] md:pt-14 flex flex-col justify-between flex-grow">
        <Stack spacing={2} className="flex-1 ml-[1px] mt-[1px]">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input" // Add appropriate styling class
          />
          <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={formatMovie(movie as MovieModel)}
              />
            ))}
          </div>
          <div className="block md:hidden flex-1"></div>
          <Divider className="md:mt-[46px] mb-[77px]"></Divider>
        </Stack>
      </div>
    </div>
  );
}
