import express from "express";
import { getUser } from "../Controller/UserController.js";

const router = express.Router();

router.get('/:id', getUser)

export default router;