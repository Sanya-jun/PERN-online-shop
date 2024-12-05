import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
};
try {
  $authHost.interceptors.request.use(authInterceptor);
  console.log($authHost);
} catch (error) {
  console.log(error);
}

export { $host, $authHost };
