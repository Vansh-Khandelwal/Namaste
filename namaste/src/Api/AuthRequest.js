import axios from 'axios'

const API = axios.create({ baseURL: process.env.BASE_URL })

export const login = (formData) => API.post('/auth/login', formData)
export const signup = (formData) => API.post('/auth/register', formData)