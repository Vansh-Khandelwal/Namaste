import axios from 'axios'

const API = axios.create({ baseURL: process.env.BASE_URL })

export const uploadImage = (data) => API.post('/upload/', data)
export const uploadPost = (data) => API.post('/posts/', data)