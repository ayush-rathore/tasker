// Listing all the items

import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";

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

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = React.useCallback(async () => {
		setRefreshing(true);
		const userID = user._id;
		await client.get(`/task/get/${userID}`).then((res) => {
			console.log(res.data);
			addTask(res.data);
		});
		setRefreshing(false);
	}, [refreshing]);

	const getTasks = async () => {
		const userID = user._id;
		await client.get(`/task/get/${userID}`).then((res) => {
			console.log(res.data);
			addTask(res.data);
		});
	};

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<Screen style={styles.screen}>
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
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
						/>
					}
				/>
			)}
			<AddButton onPress={() => navigation.navigate("AddTask")} />
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.white,
		paddingTop: 0,
	},
});

export default TaskScreen;
