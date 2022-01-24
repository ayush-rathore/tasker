const User = require("../models/user");

exports.register = async (req, res) => {
	let { username, password } = req.body;
	let userExists = await User.findOne({ username: username });
	if (userExists)
		return res
			.status(500)
			.send("This username is already taken! Try another one.");
	else {
		let user = new User({ username, password });
		user.save()
			.then(() => {
				console.info(`User created with name ${user.username}`);
				return res.status(200).send(user);
			})
			.catch((error) => {
				console.error(error);
				return res
					.status(500)
					.send("An error occured while creating user!");
			});
	}
};

exports.login = async (req, res) => {
	let { username, password } = req.body;
	await User.findOne({ username })
		.then((user) => {
			if (user) {
				if (password === user.password) {
					console.info(`${username} logged in`);
					return res.status(200).send(user);
				}
				console.warn("Password Incorrect");
				return res.status(401).send("Password incorrect!");
			}
		})
		.catch((error) => {
			console.error("User not found!");
			return res.status(404).send("User does not exists!");
		});
};

exports.users = async (req, res) => {
	await User.find()
		.then((users) => {
			if (users) {
				return res.status(200).send(users);
			}
		})
		.catch((error) => {
			return res.status(500).send("Error in getting users");
		});
};
