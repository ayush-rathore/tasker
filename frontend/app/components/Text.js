// Text component

import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style }) {
	return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "Poppins-Regular",
	},
});

export default AppText;
