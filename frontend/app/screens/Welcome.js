import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import Text from "../components/Text";

function Welcome() {
	const onPress = () => {
		console.log("Button Pressed");
	};
	return (
		<Screen style={styles.container}>
			<Text>Tasker</Text>
			<View style={styles.welcome}>
				<Image
					source={require("../assets/images/home.png")}
					style={styles.welcomeImage}
				/>
			</View>
			<View style={styles.button}>
				<Button title="Login" onPress={onPress} />
				<Text>Don't have an account? Register</Text>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	welcome: {
		alignItems: "center",
		position: "absolute",
		top: 100,
	},
	welcomeImage: {
		width: 200,
		height: 200,
	},
	button: {
		top: 200,
		alignItems: "center",
		width: "100%",
	},
});

export default Welcome;
