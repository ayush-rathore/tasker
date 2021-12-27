// Listing all the items

import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

import client from "../api/client";
import User from "../context/User";

const TaskScreen = () => {
	const { user, tasks, addTask } = User();

	const getTasks = async () => {
		const response = await client.get(`/task/get/${user._id}`);
		addTask(response.data);
	};

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<Screen style={styles.screen}>
			<FlatList
				data={tasks}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<Card
						name={item.name}
						description={item.description}
						onPress={() => console.log(`${item.name}`)}
					/>
				)}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
});

export default TaskScreen;
