import axios from "axios";

const API = axios.create({ baseURL: "https://namaste-yzsb.onrender.com" })

export const userChats = (id) => API.get(`/chat/${id}`)