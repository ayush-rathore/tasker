import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TaskScreen from "../screens/Task";
import AddTask from "../screens/AddTask";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

const TaskNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Task"
			component={TaskScreen}
			options={{
				// headerShown: false,
				title: "My Tasks",
				headerRight: () => (
					<TouchableOpacity style={styles.container}>
						<AntDesign name="logout" size={24} color="black" />
					</TouchableOpacity>
				),
			}}
		/>
		<Stack.Screen
			name="AddTask"
			component={AddTask}
			options={{ title: "Add Task" }}
		/>
	</Stack.Navigator>
);

const styles = StyleSheet.create({
	container: {
		marginRight: 15,
	},
});

export default TaskNavigator;
