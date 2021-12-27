//Posting item screen

import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/FormComponents";

import Screen from "../components/Screen";

import client from "../api/client";
import User from "../context/User";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(5).label("Name"),
	description: Yup.string().required().min(5).label("Description"),
});

const AddTask = () => {
	const { user, addTask } = User();

	const handleSubmit = async (taskInfo) => {
		taskInfo.userID = user._id;
		const response = await client.post("/task/add", taskInfo);
		addTask(response.data);
		console.log(response.data);
	};

	return (
		<Screen style={styles.container}>
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
