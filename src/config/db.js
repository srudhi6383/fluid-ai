const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

let uri = process.env.MONGO_URI;

const connectDB = async () => {
	try {
		// connect using mongoDB Uri
		await mongoose.connect(`${uri}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;