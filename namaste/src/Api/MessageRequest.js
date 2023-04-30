import axios from 'axios'

const API = axios.create({ baseURL: process.env.BASE_URL })

export const getMessages = (chatId) => API.get(`/message/${chatId}`)
export const addMessage = (data) => API.post('/message/', data)