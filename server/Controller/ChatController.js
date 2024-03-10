import ChatModel from "../Models/chatModel.js";

// Create a chat

export const createChat = async(req, res) => {
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.recieverId]
    })

    try {
        const result = await newChat.save()
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json(error)
    }
}

// get all the chat of the user

export const userChats = async(req, res) => {

    try {
        const chat = await ChatModel.find({
            members: { $in: [req.params.userId] }
        })
        res.status(200).json(chat)

    } catch (error) {
        res.status(500).json(error)
    }
}

// find chat with a particular person

export const findChat = async(req, res) => {

    try {
        const chat = await ChatModel.findOne({
            members: { $all: [req.params.firstId, req.params.secondId] }
        })
        res.status(200).json(chat)

    } catch (error) {
        res.status(500).json(error)
    }
}

// Delete the chat with a person 

export const deleteChat = async(req, res) => {
    try {
        const delChat = await ChatModel.deleteOne({ _id: req.body.chatId })
        res.status(200).json(delChat)
    } catch (error) {
        res.status(500).json(error)
    }
}