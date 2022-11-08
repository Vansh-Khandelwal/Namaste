import express from 'express'
import { addMessages, getMessages } from '../Controller/MessageController.js'

const router = express.Router()

router.post('/', addMessages)
router.get('/:chatId', getMessages)

export default router