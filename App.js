import React, { useState } from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import TaskNavigator from "./app/navigation/TaskNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

import UserContext from "./app/context/context";

const App = () => {
	const [user, setUser] = useState();
	const [tasks, setTasks] = useState([]);

	return (
		<UserContext.Provider value={{ user, setUser, tasks, setTasks }}>
			<NavigationContainer theme={NavigationTheme}>
				{user ? <TaskNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</UserContext.Provider>
	);
};

export default App;
