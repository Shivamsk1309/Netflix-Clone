import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    key: "dff518c62b66f76f29833a636e83c0d6",
  },
});

export default apiClient;