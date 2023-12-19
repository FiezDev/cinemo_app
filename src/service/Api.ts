import axios from "axios";

const BASE_URL = "https://www.majorcineplex.com";

export default (baseURL = BASE_URL) => {
  return axios.create({
    baseURL,
  });
};
