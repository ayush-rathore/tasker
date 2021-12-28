// Listing all the items

import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

import User from "../context/User";
import client from "../api/client";
import Spinner from "react-native-loading-spinner-overlay";
import AddButton from "../components/AddButton";
import NoTask from "../components/NoTask";

const TaskScreen = ({ navigation }) => {
	const { user, tasks, addTask } = User();

	const getTasks = async () => {
		const userID = user._id;
		const response = await client.get(`/task/get/${userID}`);
		addTask(response.data);
	};

	useEffect(() => {
		getTasks();
	}, [tasks]);

	return (
		<Screen style={styles.screen}>
			<Spinner visible={!tasks.length} color="#1E88E5" />
			{tasks.length == 0 ? (
				<NoTask />
			) : (
				<FlatList
					data={tasks}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => (
						<Card
							name={item.name}
							dateCreated={item.dateCreated}
							description={item.description}
							taskID={item._id}
						/>
					)}
				/>
			)}
			<AddButton onPress={() => navigation.navigate("AddTask")} />
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.white,
	},
});

export default TaskScreen;
