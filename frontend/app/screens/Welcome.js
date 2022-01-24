import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
	return (
		<Screen style={styles.container}>
			<View style={styles.welcome}>
				<Image
					source={require("../assets/images/Tasker.png")}
					style={styles.welcomeImage}
				/>
			</View>
			<View style={styles.button}>
				<Button
					title="Login"
					onPress={() => navigation.navigate("Login")}
				/>
				<Text style={styles.register}>
					Don't have an account?
					<Text
						style={styles.regText}
						onPress={() => navigation.navigate("Register")}
					>
						{" "}
						Register
					</Text>
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
		top: 150,
	},
	welcomeImage: {
		width: 400,
		height: 300,
	},
	button: {
		flex: 1,
		top: 150,
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
	regText: {
		color: colors.secondary,
	},
});

export default WelcomeScreen;
