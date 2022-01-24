const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
	mongoose
		.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.info("--- Database connected succesfully ---");
		})
		.catch(() => {
			console.error("--- Mongodb connection failed ---");
		});
};
