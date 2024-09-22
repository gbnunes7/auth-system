import jwt from "jsonwebtoken";

async function auth(req, res, next) {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(401).send("Acess token not provided");
	}

	const [, acessToken] = token.split(" ");

	try {
		const decoded = jwt.verify(acessToken, process.env.JWT_SECRET);
		const { id, email } = decoded;
		req.usuario = req.usuario || {};
		req.usuario.id = id;
		req.usuarioEmail = email;

		return next();
	} catch (err) {
		res.status(401).send("User not authorized");
	}
}

export default auth