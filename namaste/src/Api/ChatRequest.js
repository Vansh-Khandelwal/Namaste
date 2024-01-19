import { API } from "./API.js"

export const userChats = (id) => API.get(`/chat/${id}`)