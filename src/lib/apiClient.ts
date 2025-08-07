import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.spoonacular.com/",
  params: {
    apiKey: "de86ee72f5e74060a141e0a3db829b07",
  },
});

export default apiClient;
