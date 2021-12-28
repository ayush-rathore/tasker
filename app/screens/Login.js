//Login Screen

import React from "react";
import { StyleSheet, Alert } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {
	Form,
	FormField,
	ErrorMessage,
	SubmitButton,
} from "../components/FormComponents/index.js";

import Spinner from "react-native-loading-spinner-overlay";

import useApi from "../hooks/useApi";
import auth from "../api/auth";
import User from "../context/User";

const validationSchema = Yup.object().shape({
	username: Yup.string().required().label("Username"),
	password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
	const { error, login } = User();

	const loginApi = useApi(auth.login);

	const handleSubmit = async (userInfo) => {
		const response = await loginApi.request(userInfo);
		if (!response.ok) {
			return Alert.alert("Error", "Invalid username or password!");
		}
		login(response.data);
	};

	return (
		<Screen style={styles.container}>
			<Spinner visible={loginApi.loading} color="#1E88E5" />
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
				<SubmitButton title="Login" />
			</Form>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default LoginScreen;
