import axios from "axios";

const BASE_URL = "https://www.majorcineplex.com"; // if there's a common base URL

export default (baseURL = BASE_URL) => {
  return axios.create({
    baseURL,
  });
};
