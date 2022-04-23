import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../infrastructure/stack/homePage/styles";
import { Card } from "react-native-paper";

const Notifications = () => {
	const initalPushData = {
		alertTitle: "Notifications",
		alertMessage:
			'Click on the "View new Notifications" button to see the lastest notification...   Once you click "DELETE," you will NOT be able to see the notification',
	};
	const [pushData, setPushData] = useState(initalPushData);
	const getData = async () => {
		try {
			const data = await AsyncStorage.getItem("@pushData");
			return data != null ? setPushData(JSON.parse(data)) : null;
		} catch (error) {
			console.log(e);
		}
	};
	const deleteData = async () => {
		try {
			await AsyncStorage.removeItem("@pushData");
			setPushData("");
		} catch (e) {}
	};
	useEffect(() => {
		getData;
	});

	return (
		<View style={{ margin: 40 }}>
			<TouchableOpacity style={styles.notificationButton} onPress={getData}>
				<Text style={[styles.bigText, { fontSize: 18 }]}>
					View new Notification
				</Text>
			</TouchableOpacity>
			{/* <FlatList
				data={pushData}
				renderItem={({ item }) => (
					<View>
						<Text>{pushData.alertTitle}</Text>
						<Text>{pushData.alertMessage}</Text>
						<Button title="Delete" onPress={deleteData} />
					</View>
				)}
			/> */}
			<View style={styles.break} />
			<Card style={{ borderRadius: 20 }}>
				<Text style={[styles.bigText, { color: "black", textAlign: "center" }]}>
					{pushData.alertTitle}
				</Text>
				<Text
					style={[styles.smallText, { color: "black", textAlign: "center" }]}
				>
					{pushData.alertMessage}
				</Text>
				<View style={styles.break} />
				<Button title="Delete" onPress={deleteData} />
			</Card>
		</View>
	);
};
export default Notifications;
