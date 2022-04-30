import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const VisableItem = (props) => {
	const { data } = props;
	return (
		<View style={styles.rowFront}>
			<TouchableHighlight style={styles.rowFrontVisible}>
				<View>
					<Text style={styles.title} numberOfLines={1}>
						{data.item.title}
					</Text>
					<View style={styles.break} />
					<Text style={styles.details} numberOfLines={3}>
						{data.item.message}
					</Text>
					<View style={styles.break} />
					<Text style={(styles.details, { color: "#666" })} numberOfLines={1}>
						Sent on: {data.item.date}
					</Text>
				</View>
			</TouchableHighlight>
		</View>
	);
};

export default VisableItem;
