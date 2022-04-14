import { View, Text } from "react-native";
import React from "react";
import { getPushDataObject } from "native-notify";

const Notifications = () => {
	let pushDataObject = getPushDataObject();
	return (
		<View>
			<Text>{pushDataObject.alertTitle}</Text>
			<Text>{pushDataObject.alertMessage}</Text>
		</View>
	);
};

export default Notifications;
