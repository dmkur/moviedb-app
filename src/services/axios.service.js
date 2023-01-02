import { baseURL } from "../constants/urls";
const { default: axios } = require("axios");

const axiosService = axios.create({
  baseURL,
});

export { axiosService };
