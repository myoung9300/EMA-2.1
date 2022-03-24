import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';

import registerNNPushToken from 'native-notify';

import TabNavigation from './components/infrastructure/tab/Tab';

import { PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import {
	Nunito_600SemiBold,
	Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

Amplify.configure(awsconfig);
export default function App() {
	registerNNPushToken(2348, 'hqEMgzJMPWeyd0tRiFUUPl');
	let [fontsLoaded, error] = useFonts({
		PatrickHandSC_400Regular,
		Nunito_600SemiBold,
		Nunito_800ExtraBold,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<TabNavigation />
				<StatusBar style='auto' />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
