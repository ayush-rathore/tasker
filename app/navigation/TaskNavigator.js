import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TaskScreen from "../screens/Task";
import AddTask from "../screens/AddTask";

const Stack = createStackNavigator();

const TaskNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Task"
			component={TaskScreen}
			options={{
				title: "My tasks",
			}}
		></Stack.Screen>
		<Stack.Screen
			name="AddTask"
			component={AddTask}
			options={{ title: "Add Task" }}
		></Stack.Screen>
	</Stack.Navigator>
);

export default TaskNavigator;
