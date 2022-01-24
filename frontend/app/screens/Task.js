// Listing all the items

import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

import User from "../context/User";
import useApi from "../hooks/useApi";
import task from "../api/task";
import Spinner from "react-native-loading-spinner-overlay";
import AddButton from "../components/AddButton";
import NoTask from "../components/NoTask";

const TaskScreen = ({ navigation }) => {
	const { user, tasks, addTask } = User();
	const taskApi = useApi(task.get);

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = React.useCallback(async () => {
		setRefreshing(true);
		getTasks();
		setRefreshing(false);
	}, [refreshing]);

	const getTasks = async () => {
		const userID = user._id;
		const response = await taskApi.request(userID);
		addTask(response.data);
	};

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<Screen style={styles.screen}>
			<Spinner visible={taskApi.loading} color="#1E88E5" />
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
