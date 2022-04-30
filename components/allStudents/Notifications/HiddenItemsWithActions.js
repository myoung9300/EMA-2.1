import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const HiddenItemsWithActions = (props) => {
	const { onClose, onDelete } = props;
	return (
		<View style={styles.rowBack}>
			<TouchableOpacity
				style={[styles.backRightBtn, styles.backRightBtnLeft]}
				onPress={onClose}
			>
				<Text>Close</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.backRightBtn, styles.backRightBtnRight]}
				onPress={onDelete}
			>
				<Text>Delete</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HiddenItemsWithActions;
