import axios from "axios";
import {_accessKey, baseURL} from "../constants";

const axiosService = axios.create({
    baseURL
});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `${_accessKey}`
    return config
})

export {axiosService}

