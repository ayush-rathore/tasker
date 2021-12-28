// Listing all the items

import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ActionButton from "react-native-action-button";

import client from "../api/client";
import User from "../context/User";

const TaskScreen = ({ navigation }) => {
	const { user, tasks, addTask } = User();

	const getTasks = async () => {
		const response = await client.get(`/task/get/${user._id}`);
		addTask(response.data);
	};

	useEffect(() => {
		getTasks();
	}, [tasks]);

	return (
		<Screen style={styles.screen}>
			<FlatList
				data={tasks}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<Card
						name={item.name}
						description={item.description}
						taskID={item._id}
					/>
				)}
			/>
			<ActionButton
				buttonColor="#1E88E5"
				onPress={() => navigation.navigate("AddTask")}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.primary,
	},
});

export default TaskScreen;
