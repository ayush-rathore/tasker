import React from "react";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import User from "../context/User";

function Logout() {
	const { logout } = User();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => {
				Alert.alert("Log out", "Sure, you wanna log out?", [
					{ text: "No", style: "cancel" },
					{ text: "Yes", onPress: () => setTimeout(logout, 500) },
				]);
			}}
		>
			<AntDesign name="logout" size={24} color="black" />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		marginRight: 15,
	},
});

export default Logout;
