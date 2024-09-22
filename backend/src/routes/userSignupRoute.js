import express from "express";
import { login, registerUser } from "../controllers/userController.js";

const router = express.Router();

router
    .post("/login", login)
    .post("/signup", registerUser);

export default router