import { useContext } from "react";

import UserContext from "./context";

const User = () => {
	const { user, setUser, tasks, setTasks } = useContext(UserContext);

	const login = (data) => {
		setUser(data);
	};

	const logout = () => {
		setUser(null);
	};

	const addTask = (data) => {
		setTasks(data);
	};

	return { user, login, logout, tasks, addTask };
};

export default User;
