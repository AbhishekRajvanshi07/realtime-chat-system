import axios from "axios";

const API = axios.create({
  baseURL: "https://realtime-chat-riyo.onrender.com/api",
});

export default API;
