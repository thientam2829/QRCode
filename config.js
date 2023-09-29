// config.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://your-server-url", // Thay đổi thành URL thực tế của server
});

export default instance;
