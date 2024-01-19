import { API } from "./API.js"

export const login = (formData) => API.post('/auth/login', formData)
export const signup = (formData) => API.post('/auth/register', formData)