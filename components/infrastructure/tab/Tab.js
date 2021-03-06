import React, { useState, useEffect, useRef } from "react";
import { ActivityIndicator, TouchableOpacity, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Animatable from "react-native-animatable";

import { Auth, Hub } from "aws-amplify";

import Icon, { Icons } from "../tab/icons";

import ScheduleScreenNavigator from "./schedule/index";
import ClassScreenNavigator from "./classSignUp";
import StackNavigation from "../stack/Stack";
import StudentPortal from "./studentPortal/index";
import VirtualClass from "./virtualKarate/index";
import styles from "../stack/homePage/styles";

const TabArr = [
	{
		route: "Home",
		label: "Home",
		type: Icons.Ionicons,
		activeIcon: "grid",
		inActiveIcon: "grid-outline",
		component: StackNavigation,
	},
	{
		route: "Class Sign Up",
		label: "Class",
		type: Icons.MaterialCommunityIcons,
		activeIcon: "account-group",
		inActiveIcon: "account-group-outline",
		component: ClassScreenNavigator,
	},
	{
		route: "Student Portal",
		label: "Portal",
		type: Icons.MaterialCommunityIcons,
		activeIcon: "checkbox-multiple-blank-circle",
		inActiveIcon: "checkbox-multiple-blank-circle-outline",
		component: StudentPortal,
	},
	{
		route: "Schedule",
		label: "Schedule",
		type: Icons.MaterialCommunityIcons,
		activeIcon: "clock",
		inActiveIcon: "clock-outline",
		component: ScheduleScreenNavigator,
	},
	{
		route: "Virtual Karate",
		label: "Virtual",
		type: Icons.Ionicons,
		activeIcon: "ios-videocam",
		inActiveIcon: "ios-videocam-outline",
		component: VirtualClass,
	},
];

const Tab = createBottomTabNavigator();

const TabBarButton = (props) => {
	const { item, onPress, accessibilityState } = props;
	const focused = accessibilityState.selected;
	const viewRef = useRef(null);
	useEffect(() => {
		if (focused) {
			viewRef.current.animate({
				0: { scale: 0.7 },
				1: { scale: 1.5 },
			});
		} else {
			viewRef.current.animate({
				0: { scale: 1.5 },
				1: { scale: 0.7 },
			});
		}
	}, [focused]);

	return (
		<TouchableOpacity
			style={[styles.container2, { flex: focused ? 1 : 0.7 }]}
			onPress={onPress}
			activeOpacity={1}
		>
			<Animatable.View ref={viewRef} duration={500} style={styles.container2}>
				<Icon
					type={item.type}
					name={focused ? item.activeIcon : item.inActiveIcon}
					color={focused ? "#8c8c8c" : "#0045b5"}
				/>
				<Text style={[styles.btn, { color: focused ? "#0045b5" : "#8c8c8c" }]}>
					{item.label}
				</Text>
			</Animatable.View>
		</TouchableOpacity>
	);
};

const TabNavigation = () => {
	const [user, setUser] = useState(undefined);
	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({
				bypassCache: true,
			});
			setUser(authUser);
		} catch (e) {
			setUser(null);
		}
	};

	useEffect(() => {
		checkUser();
	}, []);
	useEffect(() => {
		const listener = (data) => {
			if (data.payload.event === "signIn" || data.payload.event === "signOut") {
				checkUser();
			}
		};
		Hub.listen("auth", listener);
		return () => Hub.remove("auth", listener);
	}, []);

	if (user === undefined) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator />
			</View>
		);
	}
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{TabArr.map((item, index) => {
				return (
					<Tab.Screen
						key={index}
						options={{
							tabBarShowLabel: false,
							tabBarButton: (props) => <TabBarButton {...props} item={item} />,
						}}
						name={item.route}
						component={item.component}
					/>
				);
			})}
		</Tab.Navigator>
	);
};
export default TabNavigation;
