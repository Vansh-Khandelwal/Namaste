import { API } from "./API.js"

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`)
export const likePost = (id, userId) => API.put(`/posts/${id}/like`, { userId: userId })