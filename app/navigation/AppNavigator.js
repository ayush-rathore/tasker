// Main navigator

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AddTask from "../screens/AddTask";
import TaskScreen from "../screens/Task";
import AddButton from "../components/AddButton";
import TaskNavigator from "./TaskNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator screenOptions={{ headerShown: false }}>
		<Tab.Screen name="Feed" component={TaskNavigator} />
		<Tab.Screen
			name="AddTask"
			component={AddTask}
			options={({ navigation }) => ({
				tabBarButton: () => (
					<AddButton onPress={() => navigation.navigate("AddTask")} />
				),
			})}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
