import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	flexContainer: {
		flex: 1,
		paddingTop: 10,
	},
	tabBarContainer: {
		paddingTop: 10,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: 'rgb(49,115,193)',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		color: 'black',
		marginLeft: 20,
		marginRight: 20,
		fontSize: 24,
		fontWeight: 'bold',
	},
});

export default styles;
