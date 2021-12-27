import { useContext } from "react";

import UserContext from "./context";

const User = () => {
	const { user, setUser } = useContext(UserContext);

	const login = (data) => {
		setUser(data);
	};

	const logout = () => {
		setUser(null);
	};
	return { user, login, logout };
};

export default User;
