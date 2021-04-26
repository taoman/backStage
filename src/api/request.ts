/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-04-07 16:23:50
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-21 11:19:31
 */
import axios from "axios";
const request = axios.create({
  baseURL: "http://127.0.0.1:7001/",
  timeout: 60000,
  // headers: {
  //   Accept: process.env.VUE_APP_BASE_HEADER,
  // },
});
request.interceptors.request.use((config) => {
  const token = sessionStorage.token;
  if (token) {
    config.headers["Authorization"] = "Bearer "+ token;
  }
  return config
});

export default request