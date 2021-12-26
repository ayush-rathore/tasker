// Register Screen

import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
	Form,
	FormField,
	ErrorMessage,
	SubmitButton,
} from "../components/FormComponents";

import client from "../api/client";

const validationSchema = Yup.object().shape({
	username: Yup.string().required().label("Username"),
	password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = ({ setUser }) => {
	const handleSubmit = async (userInfo) => {
		const response = await client.post("/user/signup", userInfo);
		setUser(response.data);
	};

	return (
		<>
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
