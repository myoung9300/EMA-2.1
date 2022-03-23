import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { getPushDataObject } from 'native-notify';
import WebView from 'react-native-webview';

const SemiPVT = () => {
	let pushDataObject = getPushDataObject();
	useEffect(() => {
		if (pushDataObject.screenName === 'Private') {
			navigation.navigate('Semi pvt Lessons');
		}
	});
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<WebView
				source={{
					uri: 'https://www.signupgenius.com/go/9040848a8aa23a1ff2-exclusive',
				}}
			/>
		</SafeAreaView>
	);
};

export default SemiPVT;
