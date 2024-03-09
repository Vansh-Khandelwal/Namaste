import { API } from "./API.js"

export const userChats = (id) => API.get(`/chat/${id}`)
export const createChat = (senderId, recieverId) => API.post(`chat/`, {
    "senderId": senderId,
    "recieverId": recieverId
})