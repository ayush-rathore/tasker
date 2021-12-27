//Login Screen

import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {
	Form,
	FormField,
	ErrorMessage,
	SubmitButton,
} from "../components/FormComponents/index.js";

import client from "../api/client";
import User from "../context/User";

const validationSchema = Yup.object().shape({
	username: Yup.string().required().label("Username"),
	password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
	const { login } = User();
	const [loginFail, setLoginFail] = useState(false);
	const handleSubmit = async (userInfo) => {
		const response = await client.post("/user/login", userInfo);
		if (!response.ok) setLoginFail(true);
		setLoginFail(false);
		login(response.data);
	};

	return (
		<Screen style={styles.container}>
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
