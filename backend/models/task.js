const mongoose = require("mongoose");
const Task = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	dateCreated: {
		type: Date,
		default: new Date(),
	},
	description: {
		type: String,
		required: true,
	},
	userID: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
});

module.exports = mongoose.model("task", Task, "task");
