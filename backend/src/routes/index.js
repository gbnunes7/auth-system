import express from "express";
import users from "./userRoute.js";
import auth from "../middleware/auth.js";
import basic from "./userSignupRoute.js"

const routes = (app) => {
	app
		.route("/")
		.get((req, res) => res.status(200).json({ titulo: "AuthSystem" }));
	app.use(express.json());
    app.use(basic)
    app.use(auth)
    app.use(users)
};

export default routes;
