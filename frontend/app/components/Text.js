// Text component

import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { AppLoading } from "expo-app-loading";

function AppText({ children, style }) {
	let [fontsLoaded] = useFonts({ Poppins_400Regular });

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return <Text style={[styles.text, style]}>{children}</Text>;
	}
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "Poppins_400Regular",
	},
});

export default AppText;
