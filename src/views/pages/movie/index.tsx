import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { fetchMovies } from "../../../store/moviesActions";
import MovieCard from "../../components/MovieCard";
import { Stack } from "@mui/material";
import { MovieModel } from "../../../models";
import { RootState } from "../../../store";

export default function Movie() {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<MovieModel[]>([]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

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

  return (
    <div className="w-full flex flex-row flex-grow">
      <Stack spacing={2} className="flex-1 ml-[1px] mt-[1px]">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=""
        />
        <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={formatMovie(movie)} />
          ))}
        </div>
      </Stack>
    </div>
  );
}
