import mongoose from "mongoose";

async function connectToDb() {
	try {
		mongoose.connect(process.env.STRING_CONNECT_DB);
		console.log("Connection to database successfully");
	} catch (err) {
		console.log("Err on connection to dabase ", err);
	}
}

export default connectToDb;
