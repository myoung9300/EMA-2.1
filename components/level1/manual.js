import React from 'react';
import { View, ActivityIndicator, Platform } from 'react-native';
import WebView from 'react-native-webview';

const Level1Manual = ({ navigation }) => {
	if (Platform.OS === 'android') {
		return (
			<View style={{ flex: 1 }}>
				<WebView
					source={{
						uri: 'https://drive.google.com/viewerng/viewer?embedded=true&url={https://emafiles.herokuapp.com/store/Level_1_Manual.pdf}',
					}}
					startInLoadingState={true}
					renderLoading={() => <ActivityIndicator color='black' size='large' />}
				/>
			</View>
		);
	}
	return (
		<View style={{ flex: 1 }}>
			<WebView
				source={{
					uri: 'https://emafiles.herokuapp.com/store/Level_1_Manual.pdf',
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='black' size='large' />}
			/>
		</View>
	);
};

export default Level1Manual;
