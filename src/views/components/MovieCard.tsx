import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MovieModel } from "../../models";

interface MovieCardProps {
  movie: MovieModel;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card style={{ maxWidth: 345, margin: 10 }}>
      <CardMedia
        component="img"
        height="140"
        image={movie.poster_url}
        alt={movie.title_en}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title_en} ({movie.title_th})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Director: {movie.director}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {movie.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duration: {movie.duration} minutes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Release Date: {movie.release_date}
        </Typography>
        {/* Additional movie details */}
        <Typography variant="body2" color="text.secondary">
          Rating: {movie.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Synopsis:{" "}
          {movie.synopsis_en.length > 100
            ? `${movie.synopsis_en.substring(0, 100)}...`
            : movie.synopsis_en}
        </Typography>
        <Button size="small">Favorite</Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
