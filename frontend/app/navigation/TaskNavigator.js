import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TaskScreen from "../screens/Task";
import AddTask from "../screens/AddTask";
import Logout from "../components/Logout";

const Stack = createStackNavigator();

const TaskNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Task"
			component={TaskScreen}
			options={{
				title: "My Tasks",
				headerRight: () => <Logout />,
				headerTitleStyle: {
					fontSize: 23,
				},
				headerTitleAlign: "center",
			}}
		/>
		<Stack.Screen
			name="AddTask"
			component={AddTask}
			options={{ title: "Add Task" }}
		/>
	</Stack.Navigator>
);

export default TaskNavigator;
