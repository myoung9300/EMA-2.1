import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";

import registerNNPushToken from "native-notify";
import { getPushDataObject } from "native-notify";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TabNavigation from "./components/infrastructure/tab/Tab";

import { PatrickHandSC_400Regular } from "@expo-google-fonts/patrick-hand-sc";
import {
	Nunito_600SemiBold,
	Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import InstructorPVT from "./components/infrastructure/tab/classSignUp/instructors";

Amplify.configure(awsconfig);
export default function App() {
	registerNNPushToken(2348, "hqEMgzJMPWeyd0tRiFUUPl");
	let pushDataObject = getPushDataObject("");

	useEffect(() => {
		if ("alertTitle" in pushDataObject) {
			Alert.alert(pushDataObject.alertTitle, pushDataObject.alertMessage);
		}

		axios.post(`https://app.nativenotify.com/api/analytics`, {
			app_id: 2348,
			app_token: "hqEMgzJMPWeyd0tRiFUUPl",
			screenName: "HomeStack",
		});
	});
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
				<StatusBar style="auto" />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
