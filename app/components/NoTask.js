import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const NoTask = () => {
	return (
		<View style={styles.textView}>
			<Text style={styles.text}>
				No tasks found! Add some tasks and get started...
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		color: colors.dark,
		fontSize: 15,
	},
	textView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default NoTask;
