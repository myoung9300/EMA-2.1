import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	flexContainer: {
		flex: 1,
		paddingTop: 16,
	},
	tabBarContainer: {
		paddingTop: 16,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: 'rgb(49,115,193)',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		color: 'white',
		paddingTop: 10,
		marginLeft: 20,
		marginRight: 20,
		paddingBottom: 10,
		fontSize: 24,
		fontWeight: 'bold',
	},
});

export default styles;
