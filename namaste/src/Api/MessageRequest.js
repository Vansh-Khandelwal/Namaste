import { API } from "./API.js"

export const getMessages = (chatId) => API.get(`/message/${chatId}`)
export const addMessage = (data) => API.post('/message/', data)