import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { fetchMovies } from "../../../store/moviesActions";
import { RootState } from "../../../store";
import { Typography } from "@mui/material";

export default function Detail() {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const movie = movies.find((m) => m.id.toString() === id);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, movies.length]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full justify-around p-5">
      <img
        src={movie.poster_url}
        alt={movie.title_en}
        className="w-[40%] max-h-[90%]"
      />
      <div className="w-[55%] flex flex-col gap-2">
        {movie.trailer && (
          <iframe
            className="w-full h-[480px]"
            src={movie.trailer}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <Typography className="font-bold text-4xl text-primary my-4">
          {movie.title_en} ({movie.title_th})
        </Typography>
        <Typography className="font-bold text-primary">
          Director:{" "}
          <span className="font-normal text-white">{movie.director}</span>
        </Typography>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Typography className="font-bold text-primary mb-2">
              Genre:{" "}
              <span className="font-normal text-white">{movie.genre}</span>
            </Typography>
            <Typography className="font-bold text-primary">
              Duration:&nbsp;
              <span className="font-normal text-white">
                {movie.duration} minutes
              </span>
            </Typography>
          </div>
          <div className="w-1/2">
            <Typography className="font-bold text-primary mb-2">
              Release Date:&nbsp;
              <span className="font-normal text-white">
                {movie.release_date}
              </span>
            </Typography>
            <Typography className="font-bold text-primary">
              Rating:{" "}
              <span className="font-normal text-white">{movie.rating}</span>
            </Typography>
          </div>
        </div>
        <Typography className="font-bold text-primary">
          Actor: <span className="font-normal text-white">{movie.actor}</span>
        </Typography>
        <Typography className="font-bold text-primary">
          Synopsis (TH):{" "}
          <span className="font-normal text-white">{movie.synopsis_th}</span>
        </Typography>
        <Typography className="font-bold text-primary">
          Synopsis (EN):{" "}
          <span className="font-normal text-white">{movie.synopsis_en}</span>
        </Typography>
      </div>
    </div>
  );
}
