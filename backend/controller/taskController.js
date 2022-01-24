const mongoose = require("mongoose");
const Task = require("../models/task");

exports.add = (req, res) => {
	let { name, description, userID } = req.body;
	userID = mongoose.Types.ObjectId(userID);
	let task = new Task({ name, description, userID });
	task.save()
		.then(() => {
			console.info(`New Task was created for User: ${userID}`);
			return res.status(200).send(task);
		})
		.catch((error) => {
			console.error("Error creating task");
			return res
				.status(500)
				.send("An error occurred while creating task!");
		});
};

exports.get = async (req, res) => {
	let { userID } = req.params;
	userID = mongoose.Types.ObjectId(userID);
	await Task.find({ userID })
		.then((tasks) => {
			console.info(userID);
			if (tasks.length == 0) {
				console.error(`No tasks found for user ${userID}`);
				return res.status(404).send([]);
			}
			console.info(`Tasks found for user ${userID}`);
			return res.status(200).send(tasks);
		})
		.catch((error) => {
			console.error("Task not found");
			return res.status(404).send("No tasks found!");
		});
};

exports.remove = (req, res) => {
	let { taskID } = req.params;
	taskID = mongoose.Types.ObjectId(taskID);
	Task.deleteOne({ _id: taskID })
		.then(() => {
			console.info("Task deleted successfully");
			return res.status(200).send("Task deleted successfully");
		})
		.catch((error) => {
			console.error("Task not deleted");
			return res.status(500).send("No task deleted!");
		});
};
