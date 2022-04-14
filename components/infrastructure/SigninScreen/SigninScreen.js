import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
	View,
	Alert,
	Image,
	StyleSheet,
	SafeAreaView,
	useWindowDimensions,
} from "react-native";

import { Auth } from "aws-amplify";

import EMABlue from "../../../assets/images/EMABlue.png";
import CustomInput from "../SigninScreen/Custominput";
import CustomButton from "../SigninScreen/CustomButton";

const SignInScreen = ({ navigation }) => {
	const { height } = useWindowDimensions();
	const [loading, setLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSignInPress = async (data) => {
		if (loading) {
			return;
		}
		setLoading(true);
		try {
			const response = await Auth.signIn(data.username, data.password);
			navigation.navigate("HomeStack");
		} catch (e) {
			Alert.alert("Oops", e.message);
		}
		setLoading(false);
	};
	const onForgotPasswordPress = () => {
		navigation.navigate("Forgot Password");
	};
	const onSignUp = () => {
		navigation.navigate("Sign Up");
	};

	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={EMABlue} />
			<View style={styles.break} />
			<CustomInput
				name="username"
				placeholder="Username"
				control={control}
				rules={{ required: "Username is required" }}
			/>
			<CustomInput
				name="password"
				placeholder="Password"
				control={control}
				secureTextEntry
				type="PRIMARY"
				rules={{
					required: "Password is required",
					minLength: {
						value: 4,
						message: "Password should be minumium 6 characters long",
					},
				}}
			/>

			<CustomButton
				text={loading ? "Loading..." : "Sign In"}
				onPress={handleSubmit(onSignInPress)}
			/>
			<CustomButton
				text="Forgot password?"
				onPress={onForgotPasswordPress}
				type="TERTIARY"
			/>
			<View style={styles.break} />
			<View style={styles.break} />
			<CustomButton
				text="Don't have an account? Create one"
				onPress={onSignUp}
				type="TERTIARY"
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		alignItems: "center",
	},
	logo: {
		alignSelf: "center",
		borderRadius: 10,
		width: "90%",
		height: 120,
	},
	break: {
		padding: 16,
	},
});
export default SignInScreen;
