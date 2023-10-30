import axios from "axios";

const github = axios.create({ baseURL: "https://api.github.com" });

github.interceptors.request.use(async (config) => {
  // config.headers.access_token = `token123`;
  // config.headers["Content-Type"] = "application/json";
  return config;
});

export default github;
