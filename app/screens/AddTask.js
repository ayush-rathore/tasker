//Posting item screen

import React from "react";
import { StyleSheet, Alert } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/FormComponents";

import Screen from "../components/Screen";

import useApi from "../hooks/useApi";
import task from "../api/task";
import User from "../context/User";
import Spinner from "react-native-loading-spinner-overlay";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(5).label("Name"),
	description: Yup.string().required().min(5).label("Description"),
});

const AddTask = ({ navigation }) => {
	const { user, addTask } = User();
	const taskApi = useApi(task.add);

	const AsyncAlert = async () => {
		new Promise((resolve) => {
			Alert.alert("Success", "Task added!", [
				{
					text: "OK",
					onPress: () => {
						resolve("yes");
						// navigation.navigate("Task");
					},
				},
			]);
		});
	};

	const handleSubmit = async (taskInfo) => {
		taskInfo.userID = user._id;
		const response = await taskApi.request(taskInfo);
		addTask(response.data);
		await AsyncAlert();
	};

	return (
		<Screen style={styles.container}>
			<Spinner visible={taskApi.loading} color="#1E88E5" />
			<Form
				initialValues={{
					name: "",
					description: "",
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<FormField maxLength={255} name="name" placeholder="Name" />
				<FormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Add" />
			</Form>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginTop: 20,
		alignItems: "center",
	},
});

export default AddTask;
