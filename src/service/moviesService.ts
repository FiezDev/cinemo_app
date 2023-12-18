import Api from "./Api";

// moviesService.ts

const ENDPOINT = "/apis/get_movie_avaiable";

export default {
  async getMovies() {
    const response = await Api().get(ENDPOINT);
    return response.data.data;
  },
};
