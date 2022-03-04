import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Lvl1Breakdown = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate('Ema Pass Chon Ji')}>
				<Text style={styles.Button}>Chon - Ji</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Ema Pass Tan Gun')}>
				<Text style={styles.Button}>Tan - Gun</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Ema Pass To San')}>
				<Text style={styles.Button}>To - San</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Ema Pass Won Hyo')}>
				<Text style={styles.Button}>Won - Hyo</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		backgroundColor: '#8aff8a',
	},
	Button: {
		padding: 10,
		margin: 10,
		borderRadius: 10,
		borderWidth: 3,
		borderColor: 'black',
		fontSize: 30,
		fontFamily: 'Marker Felt',
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'center',
	},
});

export default Lvl1Breakdown;
