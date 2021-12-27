import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TaskScreen from "../screens/Task";

const Stack = createStackNavigator();

const TaskNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Task" component={TaskScreen}></Stack.Screen>
	</Stack.Navigator>
);

export default TaskNavigator;
