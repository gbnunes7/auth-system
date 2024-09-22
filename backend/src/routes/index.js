import express from "express";
import users from "./userRoute.js";
import auth from "../middleware/auth.js";
import basic from "./userSignupRoute.js"
import cors from "cors"

const routes = (app) => {
	app
		.route("/")
		.get((req, res) => res.status(200).json({ titulo: "AuthSystem" }));
	app.use(express.json());
	app.use(cors())
    app.use(basic)
    app.use(auth)
    app.use(users)
};

export default routes;
