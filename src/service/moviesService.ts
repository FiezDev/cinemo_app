import { MovieModel } from "../models";
import Api from "./Api";

const ENDPOINT = "/apis/get_movie_avaiable";

export default {
  async getMovies() {
    const response = await Api().get(ENDPOINT);
    const movies: MovieModel[] = response.data.movies;
    return movies;
  },
};
