import * as ChatApi from '../../Api/ChatRequest.js'

export const createChat = (senderId, recieverId) => async(dispatch) => {
    ChatApi.createChat(senderId, recieverId)
}
export const deleteChat = (chatId) => async(dispatch) => {
    ChatApi.deleteChat(chatId)
}
export const findChat = (member1, member2) => async(dispatch) => {
    try {
        const res = await ChatApi.findChat(member1, member2)
        return res
    } catch (error) {
        return error
    }
}