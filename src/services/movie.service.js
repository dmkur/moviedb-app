import { urls } from "../constants/urls";
import { axiosService } from "./axios.service";

const movieService = {
  getAllMovies: () => axiosService.get(urls.movie),
};

export { movieService };
