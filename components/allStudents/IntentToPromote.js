import React from 'react';
import { View, ActivityIndicator, Platform } from 'react-native';
import WebView from 'react-native-webview';

const Itp = ({ navigation }) => {
	if (Platform.OS === 'android') {
		return (
			<View style={{ flex: 1 }}>
				<WebView
					source={{
						uri: 'https://drive.google.com/viewerng/viewer?embedded=true&url={https://emafiles.herokuapp.com/store/ITP.pdf}',
					}}
					startInLoadingState={true}
					renderLoading={() => <ActivityIndicator color='blue' size='large' />}
				/>
			</View>
		);
	}
	return (
		<View style={{ flex: 1 }}>
			<WebView
				source={{
					uri: 'https://emafiles.herokuapp.com/store/ITP.pdf',
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='blue' size='large' />}
			/>
		</View>
	);
};

export default Itp;
