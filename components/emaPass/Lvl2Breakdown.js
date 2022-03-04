import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Lvl2Breakdown = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate('Ema Pass Yul Gok')}>
				<Text style={styles.Button}>Yul - Gok</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate('Ema Pass Chung Gun')}
			>
				<Text style={styles.Button}>Chung - Gun</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Ema Pass Toi Gye')}>
				<Text style={styles.Button}>Toi - Gye</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate('Ema Pass Hwa Rang')}
			>
				<Text style={styles.Button}>Hwa - Rang</Text>
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

export default Lvl2Breakdown;
