import React, { useState, useEffect } from 'react';
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
} from 'react-native';
import { getPushDataObject } from 'native-notify';
import styles from '../../stack/homePage/styles';

export default function ClassSignUp({ navigation }) {
	let pushDataObject = getPushDataObject();
	useEffect(() => {
		if (pushDataObject.screenName === 'Private') {
			navigation.navigate('Semi pvt Lessons');
		}
	});
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('../../../../assets/images/EMABlue.png')}
				style={styles.image}
			/>
			<View style={styles.break} />
			<View>
				<Text style={styles.text}>Sign up for the following: </Text>
			</View>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate('Weekly Schedule')}
				>
					<Text style={styles.area}>Classes</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Private Lessons')}
				>
					<Text style={styles.area}>Private Lesson with an Instructor</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Semi pvt Lessons')}
				>
					<Text style={styles.area}>Friday Semi-Private Class</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}
