// Card component for displaying in feed

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Card({ name, description, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.card}>
				<View style={styles.details}>
					<AppText style={styles.name}>{name}</AppText>
					<AppText style={styles.description}>{description}</AppText>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: "white",
		marginBottom: 20,
		overflow: "hidden",
		width: "90%",
		marginLeft: 20,
		marginTop: 20,
		flex: 1,
		alignItems: "center",
	},
	description: {
		padding: 20,
		textAlign: "center",
	},
	name: {
		marginTop: 10,
		alignSelf: "center",
		fontSize: 20,
		fontWeight: "bold",
	},
});
export default Card;
