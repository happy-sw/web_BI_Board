import axios from "axios";

// 创建axios实例，并设置默认值
const request = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    config.headers.token = "token";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const { code, data, message } = response.data;
    if (code === 200) {
      return data;
    } else {
      return Promise.reject(message);
    }
  },
  (error) => {}
);

// 导出axios实例
export default request;
