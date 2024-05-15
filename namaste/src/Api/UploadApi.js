import { API } from "./API.js"

export const uploadPost = (data) => API.post('/posts/', data)

// This might not be needed
// export const uploadImage = (data) => API.post('/upload/', data)