// Card component for displaying in feed

import React from "react";
import { View, StyleSheet, Alert } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import useApi from "../hooks/useApi";
import task from "../api/task";
import Spinner from "react-native-loading-spinner-overlay";

function Card({ name, dateCreated, description, taskID }) {
	const taskApi = useApi(task.remove);
	let date = dateCreated.substring(0, 10);
	const handleDelete = () => {
		Alert.alert("Delete task", "Sure, you wanna delete the task?", [
			{
				text: "No",
				style: "cancel",
			},
			{
				text: "Yes",
				onPress: async () => {
					await taskApi.request(taskID);
				},
			},
		]);
	};

	return (
		<View style={styles.card}>
			<Spinner visible={taskApi.loading} color="#1E88E5" />
			<View style={styles.details}>
				<AppText style={styles.name}>{name}</AppText>
				<AppText style={styles.date}>{date}</AppText>
				<AppText style={styles.description}>{description}</AppText>
				<TouchableOpacity style={styles.delete} onPress={handleDelete}>
					<AntDesign name="delete" size={24} color={colors.black} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
		width: "90%",
		marginLeft: 20,
		marginTop: 20,
		flex: 1,
		alignItems: "center",
		elevation: 3,
	},
	date: {
		textAlign: "center",
		padding: 10,
	},
	description: {
		paddingBottom: 15,
		textAlign: "center",
	},
	name: {
		marginTop: 10,
		alignSelf: "center",
		fontSize: 20,
		fontWeight: "bold",
	},
	delete: {
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 10,
	},
});
export default Card;
