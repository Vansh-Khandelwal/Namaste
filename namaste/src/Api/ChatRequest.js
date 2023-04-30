import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL })

export const userChats = (id) => API.get(`/chat/${id}`)