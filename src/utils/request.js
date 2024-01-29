// axios的封装
import axios from "axios";

// 1.创建实例
const request = axios.create({
  baseURL: "",
  timeout: 5000,
});

//2. 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//3. 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
