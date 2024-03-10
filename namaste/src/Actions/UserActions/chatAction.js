import * as ChatApi from '../../Api/ChatRequest.js'

export const createChat = (senderId, recieverId) => async(dispatch) => {
    ChatApi.createChat(senderId, recieverId)
}
export const deleteChat = (chatId) => async(dispatch) => {
    ChatApi.deleteChat(chatId)
}