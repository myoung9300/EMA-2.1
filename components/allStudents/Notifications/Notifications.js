import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

import { SwipeListView } from "react-native-swipe-list-view";
import VisableItem from "./VisibleItem";
import HiddenItemsWithActions from "./HiddenItemsWithActions";
import styles from "./styles";

const Notifications = () => {
	const [pushData, setPushData] = useState([]);
	const [loading, setLoading] = useState(true);

	const getData = () => {
		axios
			.get(
				`https://app.nativenotify.com/api/notification/inbox/2348/hqEMgzJMPWeyd0tRiFUUPl`
			)
			.then((res) => {
				setPushData(res.data.slice(0, 5));
			});
	};
	useEffect(() => {
		getData();
	}, []);

	const closeRow = (rowMap, rowKey) => {
		if (rowMap[rowKey]) {
			rowMap[rowKey].closeRow();
		}
	};

	const deleteRow = (rowMap, rowKey) => {
		closeRow(rowMap, rowKey);
		const newData = [...pushData];
		const prevIndex = pushData.findIndex((item) => item.index === rowKey);
		newData.splice(prevIndex, 1);
		setPushData(newData);
	};

	const renderItem = (data, rowMap) => {
		return <VisableItem data={data} rowMap={rowMap} />;
	};

	const renderHiddenItem = (data, rowMap) => {
		return (
			<HiddenItemsWithActions
				data={data}
				rowMap={rowMap}
				onClose={() => closeRow(rowMap, data.index)}
				onDelete={() => deleteRow(data, data.index)}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.break} />
			<Text style={[styles.bigText, { fontSize: 18 }]}>
				App notifications will show here
			</Text>
			<Text style={styles.smallText}>
				Pull down to refresh and get the latest notification updates
			</Text>
			<SwipeListView
				data={pushData}
				renderItem={renderItem}
				renderHiddenItem={renderHiddenItem}
				keyExtractor={(item, index) => index}
				disableRightSwipe
				rightOpenValue={-150}
				swipeToOpenPercent={10}
			/>
		</View>
	);
};
export default Notifications;
