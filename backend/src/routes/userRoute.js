import express from "express";
import {
	deleteUser,
	getAll,
	getById,
	updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router
	.get("/users", getAll)
	.get("/users/id/:id", getById)
	.put("/users/id/:id", updateUser)
	.delete("/users/id/:id", deleteUser)

export default router;
