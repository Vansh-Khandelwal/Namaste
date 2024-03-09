import * as ChatApi from '../../Api/ChatRequest.js'

export const createChat = (senderId, recieverId) => async(dispatch) => {
    // dispatch({ type: "FOLLOW_USER" })
    ChatApi.createChat(senderId, recieverId)
}