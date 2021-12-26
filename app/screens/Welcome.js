import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import colors from "../config/colors";

function Welcome() {
	const onPress = () => {
		console.log("Button Pressed");
	};
	return (
		<Screen style={styles.container}>
			<Text style={styles.text}>Tasker</Text>
			<View style={styles.welcome}>
				<Image
					source={require("../assets/images/home.png")}
					style={styles.welcomeImage}
				/>
			</View>
			<View style={styles.button}>
				<Button title="Login" onPress={onPress} />
				<Text style={styles.register}>
					Don't have an account? Register
				</Text>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	welcome: {
		alignItems: "center",
		position: "absolute",
		top: 200,
	},
	welcomeImage: {
		width: 300,
		height: 250,
	},
	button: {
		flex: 1,
		top: 200,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	text: {
		top: 100,
		fontSize: 30,
		color: colors.secondary,
	},
	register: {
		top: 5,
		fontSize: 17,
	},
});

export default Welcome;
