import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAll: (params) => axiosService.get(urls.movies,{params})
}

export {movieService}