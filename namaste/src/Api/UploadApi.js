import { API } from "./API.js"

export const uploadImage = (data) => API.post('/upload/', data)
export const uploadPost = (data) => API.post('/posts/', data)