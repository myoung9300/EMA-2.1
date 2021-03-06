import React from "react";
import { View, ActivityIndicator, Platform } from "react-native";
import WebView from "react-native-webview";
import PdfReader from "rn-pdf-reader-js";

const Level1Manual = ({ navigation }) => {
	if (Platform.OS === "android") {
		return (
			<View style={{ flex: 1 }}>
				<PdfReader
					source={{
						uri: "https://emafiles.herokuapp.com/store/Level_1_Manual.pdf",
					}}
				/>
			</View>
		);
	}
	return (
		<View style={{ flex: 1 }}>
			<WebView
				source={{
					uri: "https://emafiles.herokuapp.com/store/Level_1_Manual.pdf",
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color="black" size="large" />}
			/>
		</View>
	);
};

export default Level1Manual;
