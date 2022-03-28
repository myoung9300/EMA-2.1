import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	SafeAreaView,
	Alert,
} from 'react-native';
import { useForm } from 'react-hook-form';

import { Auth } from 'aws-amplify';

import CustomInput from '../SigninScreen/Custominput';
import CustomButton from '../SigninScreen/CustomButton';

const ForgotPasswordScreen = ({ navigation }) => {
	const onSendPressed = async (data) => {
		try {
			await Auth.forgotPassword(data.username);
			Alert.alert('Success', 'Code was sent to your email');
			navigation.navigate('New Password');
		} catch (e) {
			Alert.alert('Oops', e.message);
		}
	};
	const onSignInPressed = () => {
		navigation.navigate('Sign In');
	};

	const { control, handleSubmit } = useForm();
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Reset your Password</Text>
			<View style={styles.break} />
			<CustomInput
				name='username'
				placeholder='Username'
				control={control}
				rules={{ required: 'Username is required' }}
			/>
			<CustomButton text='Send' onPress={handleSubmit(onSendPressed)} />
			<View style={styles.break} />
			<CustomButton
				text='Back to Sign In'
				onPress={onSignInPressed}
				type='TERTIARY'
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 28,
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#0045b5',
		margin: 10,
	},
	break: {
		padding: 16,
	},
});
export default ForgotPasswordScreen;
