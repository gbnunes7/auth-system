import "dotenv/config"
import { app } from "./src/app.js";

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
