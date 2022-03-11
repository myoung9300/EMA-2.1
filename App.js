import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Amplify from 'aws-amplify';

import awsconfig from './src/aws-exports';
import TabNavigation from './components/infrastructure/tab/Tab';

import { CaveatBrush_400Regular } from '@expo-google-fonts/caveat-brush';
import { PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

Amplify.configure(awsconfig);
export default function App() {
	let [fontsLoaded, error] = useFonts({
		CaveatBrush_400Regular,
		PatrickHandSC_400Regular,
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
