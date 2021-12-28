// Register Screen

import React from "react";
import { Alert, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
	Form,
	FormField,
	ErrorMessage,
	SubmitButton,
} from "../components/FormComponents";

import useApi from "../hooks/useApi";
import auth from "../api/auth";
import User from "../context/User";
import Spinner from "react-native-loading-spinner-overlay";

const validationSchema = Yup.object().shape({
	username: Yup.string().required().label("Username"),
	password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = ({ navigation }) => {
	const { login } = User();
	const registerApi = useApi(auth.register);

	const AsyncAlert = async () => {
		new Promise((resolve) => {
			Alert.alert("Success", "User registered successfully!", [
				{
					text: "OK",
					onPress: () => {
						resolve("yes");
					},
				},
			]);
		});
	};

	const handleSubmit = async (userInfo) => {
		const response = await registerApi.request(userInfo);
		login(response.data);
		await AsyncAlert();
	};

	return (
		<>
			<Screen style={styles.container}>
				<Spinner visible={registerApi.loading} color="#1E88E5" />
				<Form
					initialValues={{ username: "", password: "" }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<ErrorMessage
						error="Invalid username or password"
						visible={false}
					/>
					<FormField
						autoCorrect={false}
						icon="account"
						name="username"
						placeholder="Enter Username"
					/>
					<FormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="lock"
						name="password"
						placeholder="Enter Password"
						secureTextEntry
						textContentType="password"
					/>
					<SubmitButton title="Register" />
				</Form>
			</Screen>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default RegisterScreen;
