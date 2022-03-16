import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	flexContainer: {
		flex: 1,
		paddingTop: 16,
	},
	gradient: {
		height: '15%',
	},
	smallImage: {
		width: 80,
		height: 80,
		borderRadius: 80 / 2,
	},
	image: {
		width: 250,
		height: 250,
		borderRadius: 250 / 2,
		marginTop: -50,
	},
	card: {
		backgroundColor: '#0045b5',
	},
	cardOutsideView: {
		margin: 5,
		padding: 30,
	},
	cardInsideView: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		fontSize: 30,
		fontFamily: 'Nunito_800ExtraBold',
		textAlign: 'center',
	},
	subTitle: {
		fontSize: 20,
		fontFamily: 'PatrickHandSC_400Regular',
		textAlign: 'center',
		margin: 6,
	},
	instructorProfileCard: {
		margin: 10,
	},
	instructorCardContent: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		padding: 8,
		alignItems: 'center',
	},
	instructorCardText: {
		marginTop: 3,
		marginLeft: 8,
		fontSize: 16,
		fontFamily: 'PatrickHandSC_400Regular',
		textAlign: 'center',
	},
});

export default styles;
