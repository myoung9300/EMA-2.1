import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0045b5',
	},
	text: {
		fontFamily: 'PatrickHandSC_400Regular',
		textAlign: 'center',
		color: 'white',
		fontSize: 23,
	},
	area: {
		padding: 30,
		margin: 10,
		borderRadius: 10,
		borderWidth: 3,
		borderColor: 'white',
		fontSize: 30,
		fontFamily: 'Nunito_800ExtraBold',
		color: 'white',
		textAlign: 'center',
	},
	signOut: {
		fontFamily: 'Nunito_800ExtraBold',
		textAlign: 'center',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 10,
		color: '#ff00bb',
		fontSize: 18,
	},
	image: {
		alignSelf: 'center',
		borderRadius: 10,
		width: '90%',
		height: 120,
	},
	break: {
		padding: 16,
	},
	smallText: {
		fontFamily: 'PatrickHandSC_400Regular',
		fontSize: 16,
		alignSelf: 'center',
		color: 'white',
	},
	bigText: {
		fontFamily: 'Nunito_800ExtraBold',
		paddingTop: 200,
		color: 'white',
		fontSize: 40,
		textAlign: 'center',
	},
	tabBarContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	tabBarContainer2: {
		borderRadius: 5,
		backgroundColor: 'white',
	},
	button: {
		color: 'black',
		marginLeft: 20,
		marginRight: 20,
		fontSize: 12,
		fontWeight: 'bold',
	},
	container2: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 16,
		fontFamily: 'PatrickHandSC_400Regular',
		fontSize: 20,
	},
});

export default styles;
