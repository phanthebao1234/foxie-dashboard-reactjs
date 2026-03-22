import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// 🔐 interceptor tự động gắn token
axiosClient.interceptors.request.use((config) => {
  //   const token = localStorage.getItem("access_token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc0MTk1NDI0LCJpYXQiOjE3NzQxMDkwMjQsImp0aSI6IjNhYzJmODBmMGU0NDQ0MGZhMGM3OWYxNzA1ZTk4OTFkIiwidXNlcl9pZCI6IjEifQ.2OoHMH1jZlA94W_NveV9iFntDD5DuFns7ZqPfmricrw";

  axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
      console.log(token);
    }

    return config;
  });

  return config;
});

export default axiosClient;
