import axios from "axios";

const API = axios.create({
  baseURL: "https://realtime-chat-system-2.onrender.com/api",
});

export default API;
