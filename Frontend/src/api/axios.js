import axios from "axios";

const API = axios.create({
  baseURL: "https://realtime-chat-riyo.onrender.com",
});

export default API;
