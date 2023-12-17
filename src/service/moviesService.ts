import Api from "./Api";

export default {
  async getMovies() {
    const response = await Api().get(
      `https://www.majorcineplex.com/apis/get_movie_avaiable`
    );
    return response.data.data;
  },
};
