import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

function AddButton({ onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<AntDesign name="plus" size={15} color={colors.white} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#1E88E5",
		height: 50,
		width: 50,
		borderRadius: 25,
		position: "absolute",
		elevation: 5,
		bottom: 35,
		right: 15,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default AddButton;
