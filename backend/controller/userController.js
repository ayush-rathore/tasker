const User = require("../models/user");

exports.signup = async (req, res) => {
	let { userName, password } = req.body;
	let userExists = await User.findOne({ userName: userName });
	if (userExists) return res.status(500).send("User already exists");
	else {
		let user = new User({ userName, password });
		user.save()
			.then(() => {
				console.info(`User created with name ${user.userName}`);
				return res.status(200).send(user);
			})
			.catch((error) => {
				console.error(error);
				return res.status(500).send("Error in creating User");
			});
	}
};

exports.login = async (req, res) => {
	let { userName, password } = req.body;
	await User.findOne({ userName })
		.then((user) => {
			if (user) {
				if (password === user.password) {
					console.info(`${userName} logged in`);
					return res.status(200).send(user);
				}
				console.warn("Password Incorrect");
				return res.status(401).send("Password incorrect");
			}
		})
		.catch((error) => {
			console.error("User not found!");
			return res.status(404).send("User not found!");
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
