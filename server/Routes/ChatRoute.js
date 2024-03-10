import express from 'express'
import { createChat, userChats, findChat, deleteChat } from '../Controller/ChatController.js'

const router = express.Router()

router.post("/", createChat).delete("/", deleteChat)
router.get("/:userId", userChats)
router.get("/find/:firstId/:secondId", findChat)

export default router