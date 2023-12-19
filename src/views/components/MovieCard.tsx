import React from "react";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../../store/moviesSlice";
import { AppDispatch, RootState } from "../../store";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { MovieModel } from "../../models";

interface MovieCardProps {
  movie: MovieModel;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigation = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.movies.favorites);
  const isFavorite = favorites.includes(movie.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(movie.id));
  };

  return (
    <Card className="max-w-[345px] m-[10px] rounded-lg">
      <CardMedia
        component="img"
        height="140"
        image={movie.poster_url}
        alt={movie.title_en}
        onClick={() => navigation(`/detail/${movie.id}`)}
      />
      <CardContent className="flex flex-col gap-2 font-bold">
        <Typography className="text-3xl text-primary">
          {isFavorite ? "★" : ""} {movie.title_en} ({movie.title_th})
        </Typography>
        <Typography className="font-bold text-primary">
          Director:&nbsp;
          <span className="font-bold text-white">{movie.director}</span>
        </Typography>
        <Typography className="font-bold text-primary">
          Actor: <span className="text-white">{movie.actor}</span>
        </Typography>
        <Typography className="font-bold text-primary">
          Genre: <span className="text-white">{movie.genre}</span>
        </Typography>
        <Typography className="font-bold text-primary">
          Duration: <span className="text-white">{movie.duration} minutes</span>
        </Typography>
        <Button
          variant="contained"
          size="small"
          onClick={handleFavoriteClick}
          className={isFavorite ? "bg-amber-600 text-white" : "bg-white"}
        >
          {isFavorite ? "★ Already Favorite" : "Favorite"}
        </Button>

        <Button
          variant="contained"
          size="small"
          onClick={() => navigation(`/detail/${movie.id}`)}
          className="bg-white"
        >
          Detail
        </Button>
      </CardContent>
    </Card>
  );
};
