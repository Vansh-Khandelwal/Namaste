import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })

export const getUser = (userId) => API.post(`/user/${userId}`)
export const updateUser = (id, data) => API.put(`/user/${id}`, data)