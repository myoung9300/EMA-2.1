import React from "react";
import { SafeAreaView, ActivityIndicator, Platform } from "react-native";
import { WebView } from "react-native-webview";
import PdfReader from "rn-pdf-reader-js";

const CalanderScreen = () => {
	if (Platform.OS === "android") {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<PdfReader
					source={{
						uri: "https://emafiles.herokuapp.com/store/Calendar.pdf",
					}}
				/>
			</SafeAreaView>
		);
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<WebView
				source={{ uri: "https://emafiles.herokuapp.com/store/Calendar.pdf" }}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color="blue" size="large" />}
			/>
		</SafeAreaView>
	);
};

export default CalanderScreen;
