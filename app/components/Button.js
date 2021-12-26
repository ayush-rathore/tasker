// Button component

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function Button({ title, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		width: "80%",
		height: 50,
		marginVertical: 5,
		backgroundColor: colors.secondary,
	},
	text: {
		color: colors.primary,
		fontSize: 15,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
export default Button;
