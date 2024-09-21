import express from "express";
import {
	deleteUser,
	getAll,
	getById,
	login,
	registerUser,
	updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router
	.get("/users", getAll)
	.get("/users/id/:id", getById)
	.post("/signup", registerUser)
	.put("/users/id/:id", updateUser)
	.delete("/users/id/:id", deleteUser)
	.post("/login", login);

export default router;
