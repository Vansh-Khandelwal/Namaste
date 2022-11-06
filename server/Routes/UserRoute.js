import express from "express";
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } from "../Controller/UserController.js";

import AuthMiddleware from '../Middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id', AuthMiddleware, updateUser)
router.delete('/:id', AuthMiddleware, deleteUser)
router.put('/:id/follow', AuthMiddleware, followUser)
router.put('/:id/unfollow', AuthMiddleware, unfollowUser)

export default router;