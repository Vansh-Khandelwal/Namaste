import axios from 'axios'

const API = axios.create({ baseURL: "https://namaste-yzsb.onrender.com" })

export const getMessages = (chatId) => API.get(`/message/${chatId}`)
export const addMessage = (data) => API.post('/message/', data)