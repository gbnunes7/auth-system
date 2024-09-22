import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function getAll(req, res) {
	try {
		const users = await UserModel.find({});
		return res.status(200).json(users);
	} catch (err) {
		return res.status(404).json({ message: "Users not found" });
	}
}

export async function getById(req, res) {
	try {
		const id = req.params.id;
		const user = await UserModel.findById(id);
		return res.status(200).json(user);
	} catch (err) {
		return res.status(404).json({ message: "User not found" });
	}
}

export async function deleteUser(req, res) {
	try {
		const id = req.params.id;
		const user = await UserModel.findByIdAndDelete(id);
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json({ message: "Internal error" });
	}
}

export async function updateUser(req, res) {
	try {
		const id = req.params.id;
		const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json({ message: "Internal error" });
	}
}

export async function registerUser(req, res) {
	try {
		const existingUser = await UserModel.findOne({ email: req.body.email });

		if (existingUser) {
			return res.status(409).json({ message: "Email already registered" });
		}

		const hashPassword = await bcrypt.hash(req.body.password, 10);

		const user = await UserModel.create({
			...req.body,
			password: hashPassword,
		});

		return res.status(201).json(user);
	} catch (err) {
		return res.status(500).json({ message: "Internal error" });
	}
}

export async function login(req, res) {
	try {
		const user = await UserModel.findOne({ email: req.body.email });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const isPasswordValid = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (!isPasswordValid) {
			return res.status(401).json({ message: "Invalid password" });
		}

		const token = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" }
		);

		return res.status(200).json({
			message: "Login successful",
			token: token,
			user: {
				id: user._id,
				email: user.email,
				nome: user.nome,
			},
		});
	} catch (err) {
		return res.status(500).json({ message: "Login failed" });
	}
}
